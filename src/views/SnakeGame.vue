<template>
    <div class="snakegame">
        <div class="game-container">
            <div class="canvas-container">
                <div class="scoreboard"><p>Score: <span id="score">0</span></p></div>
                <canvas id="game" width="250" height="250"></canvas>
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
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </div>
        </div>
        <span class="logo">
            <img src="../assets/snakegame/joystick.png" alt="Joystick image">
            <p>Roberto Zepeda - 2020</p>
        </span>
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
          gameStatus: "play"
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
        moveSnake(){
            const head = {x: snake[0].x + moveX, y: snake[0].y + moveY};
            snake.unshift(head)
            snake.pop();

            if(food.x == snake[0].x && food.y == snake[0].y ){
                audio.play();
                generateFood();
                var tail = {x: snake[snake.length-1].x + moveX, y: snake[snake.length-1].y + moveY};
                snake.push(tail)
                score++;
                scoreboard.innerHTML = score;
            }

            //Verificando si la serpiente toco un borde o su cuerpo
            if(head.x === -10 || head.y === -10){    
                alert("Game Over");
                gameStatus = "over";
                scoreboard.innerHTML = 0;
            } 
            else if ((head.x === 250 || head.y === 250)){
                alert("Game Over");
                gameStatus = "over";
                scoreboard.innerHTML = 0;
            }

            for (let i = 4; i < snake.length; i++) {
                if (snake[i].x === snake[0].x && snake[i].y === snake[0].y){
                    alert("Game Over");
                    gameStatus = "over";
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

            console.log("X,Y:", this.moveX, this.moveY)
        }
        
        
    },
    mounted() {
        const game = document.getElementById('game');
        const ctx = game.getContext("2d");
        const circle = document.getElementsByClassName("circle");
        const up = document.getElementById("up");
        const down = document.getElementById("down");
        const left = document.getElementById("left");
        const right = document.getElementById("right");
        
        this.drawMap(ctx)
        this.drawFood(ctx)
        this.drawSnake(ctx)
        
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
        // window.addEventListener("keydown", event => {
        //     event.preventDefault()
        //     console.log("87")
        // })
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
  height: 100vh;
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
  padding: 25px 60px;
  background-color: #928e93;
  border-radius: 8px 8px 50px 8px;
}
.scoreboard {
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

.logo {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo img {
  margin-bottom: 5px;
  width: 50px;
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

  .logo {
    position: absolute;
    bottom: 10px;
    right: calc(50vw - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo p {
    font-size: 9px;
    color: rgb(130, 130, 130);
  }
  .logo img {
    margin-bottom: 5px;
    width: 25px;
  }
}
</style>