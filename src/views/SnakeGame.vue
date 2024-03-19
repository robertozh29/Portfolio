<template>
    <div id="snakegame" class="snakegame">
        <div class="game-container">
            <div class="canvas-container">
                <div class="score"><p>Score: <span id="score">0</span></p></div>
                <canvas id="game" width="250" height="250"></canvas>
                <div class="scoreboard" id="scoreboard">
                  <table>
                    <tr>
                      <th>Name</th>
                      <th>Score</th>
                    </tr>
                    <tr v-for="(user,index) in users_scores" :key="index">
                      <td>{{user[0]}}</td>
                      <td>{{user[1]}}</td>
                    </tr>
                  </table>
                </div>
            </div>
            <div class="controls">
                <div class="arrows">
                    <div class="hor">
                        <div id="left"></div>
                        <div id="right"></div>
                    </div>
                    <div class="ver">
                        <div id="up"></div>
                        <div id="down"></div>
                    </div>
                </div>
                <div class="circles">
                    <div class="circle" @click.prevent="showScoreboard()">
                      <p>Scores</p>
                    </div>
                    <div class="circle">
                      <p>Pause</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'SnakeGame',
    data(){
      return{
        // Game variables
          snake: [{x:120, y:120}],
          food: {x: 0, y: 0},
          moveX: 0,
          moveY: 0,
          button: 0,
          gameStatus: "play",
          score: 0,
          users_scores: []
      }  
    },
    methods:{
        drawMap(ctx){
            for (let y = 0; y < 250; y +=10) {  
                for (let x = 0; x < 250; x +=10) {
                    ctx.fillStyle = 'rgb(135, 161, 82)';
                    ctx.fillRect(x, y, 10, 10);
                }     
            }
        },
        generateFood(){
            var x = 10 * Math.floor(Math.random() * 25);
            var y = 10 * Math.floor(Math.random() * 25 );       
            this.food = {x: x, y: y};
        },
        drawFood(ctx){
            var food = this.food
            ctx.fillStyle = 'red';
            ctx.fillRect(food.x, food.y, 10, 10);
            ctx.stroke();
        },
        drawSnake(ctx){
            this.snake.forEach(part => {
            ctx.fillStyle = 'black';
            ctx.fillRect(part.x, part.y, 10, 10); 
            });
        },
        moveSnake(ctx){
            const scoreboard = document.getElementById('score');
            const head = {x: this.snake[0].x + this.moveX, y: this.snake[0].y + this.moveY};
            this.snake.unshift(head)
            this.snake.pop();

            if(this.food.x == this.snake[0].x && this.food.y == this.snake[0].y ){
                //audio.play();
                this.generateFood();
                var tail = {x: this.snake[this.snake.length-1].x + this.moveX, y: this.snake[this.snake.length-1].y + this.moveY};
                this.snake.push(tail)
                this.score++;
                scoreboard.innerHTML = this.score;
            }

            //Verificando si la serpiente toco un borde o su cuerpo
            if(head.x === -10 || head.y === -10){    
                alert("Game Over");
                this.gameStatus = "over";
                scoreboard.innerHTML = 0;
            } 
            else if ((head.x === 250 || head.y === 250)){
                alert("Game Over");
                this.gameStatus = "over";
                scoreboard.innerHTML = 0;
            }

            for (let i = 4; i < this.snake.length; i++) {
                if (this.snake[i].x === this.snake[0].x && this.snake[i].y === this.snake[0].y){
                    alert("Game Over");
                    this.gameStatus = "over";
                    scoreboard.innerHTML = 0;
                }
            }

        },
        changeDirection(e){
            var key;
            this.button === 0 ? key = e.keyCode : key = this.button;
        
            if((key === 87 || key === 38) && (this.moveY === 0)){
              this.moveY = -10;
              this.moveX = 0;
            } 
            if((key === 83 || key === 40) && (this.moveY === 0)){
              this.moveY = 10;
              this.moveX = 0;
            }
            else if((key === 65 || key === 37) && (this.moveX === 0)){
              this.moveY = 0;
              this.moveX = -10;
            }
            else if((key === 68 || key === 39) && (this.moveX === 0)){
              this.moveY = 0;
              this.moveX = 10;
            }
            this.button = 0;
        },
        endGame(ctx){
            this.snake = [
              {x:120 , y:120}
            ]
            this.score = 0;
            this.moveX = 0;
            this.moveY = 0;
            this.generateFood(ctx)
            this.gameStatus = "play"
            this.main(ctx);
        },
        main(ctx){
          setTimeout(() => {
            if(this.gameStatus == "pause"){
              this.moveY = 0;
              this.moveX = 0;
            }else{
              this.drawMap(ctx)
              this.drawFood(ctx)
              this.moveSnake(ctx);
              this.drawSnake(ctx)
            }
            if(this.gameStatus === "over"){
              this.endGame(ctx);
            }else{
              this.main(ctx);
            }
          }, 140);
        },
        showScoreboard(){
          const scoreboard = document.getElementById("scoreboard")
          scoreboard.style.display == "block" ? scoreboard.style.display = "none" : scoreboard.style.display = "block"
        },
        async get_scores(){
          try{
            const response = await fetch('http://127.0.0.1:5000/top_ten_scores')
            const movies = await response.json();
            console.log(movies);
            this.users_scores = movies
          }catch(error){
            console.log(error)
          }
        }
    },
    
    created(){
      this.get_scores()
    },
    mounted() {
        const game = document.getElementById('game');
        const ctx = game.getContext("2d");
        const circle = document.getElementsByClassName("circle");
        const up = document.getElementById("up");
        const down = document.getElementById("down");
        const left = document.getElementById("left");
        const right = document.getElementById("right");
        
        this.main(ctx)
        
        up.addEventListener('click', (e)=>{   
            this.button = 87;  
            this.changeDirection(e)
        })
        down.addEventListener('click', (e)=>{ 
            this.button = 83;  
            this.changeDirection(e)
        })
        left.addEventListener('click', (e)=>{ 
            this.button = 65;  
            this.changeDirection(e)
        })
        right.addEventListener('click', (e)=>{ 
            this.button = 68;  
            this.changeDirection(e)
        })
        circle[0].addEventListener('click', (e)=>{ 
            this.gameStatus = "pause"
        })
        circle[1].addEventListener('click', (e)=>{ 
            this.gameStatus = "pause"
        })
        window.addEventListener("keydown", event => {
            event.preventDefault()
            console.log(event.key, event.code)
            if(event.code == "Space"){
              this.gameStatus = "pause"
            }
            else if(this.gameStatus == "pause"){
              this.gameStatus = "play"
              this.changeDirection(event)
            }
            else{
              this.changeDirection(event)
            }
            
        })


        
    }
}
</script>


<style scope>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Courier New", Courier, monospace;
}

.snakegame {
  background-color: rgb(20, 20, 20);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 25px;
  background-color: #bcb7b4;
  border-radius: 10px;
}

.canvas-container {
  position: relative;
  padding: 25px 60px;
  background-color: #928e93;
  border-radius: 8px 8px 50px 8px;
}
.scoreboard{
  position: absolute;
  top: 26px;
  width: 250px;
  height: 260px;
  background-color: #000;
  display: none;
}
.scoreboard table{
  font-family: 'iconsolata',monospace;
  width: 100%;
  padding-top: 10px;
  font-size: 14px;
}
.scoreboard table tr:first-child{
  line-height:30px;
}

.score {
  width: 100%;
  height: 12px;
  background-color: #a5ad89;
  font-size: 10px;
  text-align: end;
  padding-right: 6px;
}

.controls {
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 10%;
}

.arrows {
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrows .hor {
  position: absolute;
  width: 110px;
  height: 30px;
  background-color: #000;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}

.hor div {
  width: 35%;
  height: 30px;
}

.arrows .ver {
  position: absolute;
  width: 30px;
  height: 110px;
  background-color: #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ver div {
  height: 35%;
  width: 30px;
}

.circles {
  width: min-content;
  background-color: #a1a59e;
  padding: 5px 2px;
  border-radius: 35px;
  transform: rotate(40deg);
}

.circle {
  width: 45px;
  height: 45px;
  background-color: #97072e;
  border-radius: 50%;
}

.circle:first-child {
  margin-bottom: 15px;
}

.circle p {
  transform: rotate(-90deg) translate(-16px, 0px);
  font-size: 12px;
  color: #a77482;
}




@media screen and (max-width: 430px) {
  :root {
    --paddingX: calc(50vw - 150px);
    --paddingY: calc(25vh - 150px);
  }
  .game-container {
    padding: var(--paddingY) var(--paddingX);
    border-radius: 10px;
  }

  .canvas-container {
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
    border-radius: none;
  }
}
</style>