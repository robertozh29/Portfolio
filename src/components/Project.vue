<template>
       <div class="project" :class="name">
            <div class="frame" :class="name">
                <a class="proyect-link" target="_blank" :href="link"></a>
            </div>
            <p class="nombre">{{name}}</p>
            <div class="tec">
                <img v-for="img,index in tech" :key="index"  v-bind:src="getImage(img)" :alt="img" >         
            </div>
        </div>  
</template>

<script>
export default {
    name: 'Project',
    props:{
        name: String,
        link: String,
        tech: Array
    },
    methods:{
        redirect(){
            window.open(this.link)
        },
        getImage(img){
            switch(img){
                case 'html':
                    return require(`../assets/logos/html_5.svg`);
                case 'css':
                   return require('../assets/logos/css_3.svg');
                case 'js':
                   return require("../assets/logos/js.svg");
                case 'vue':
                   return require('../assets/logos/vue.svg');
                case 'php':
                   return require('../assets/logos/php.svg');
                case 'react':
                   return require('../assets/logos/react.svg');
                case 'firebase':
                   return require('../assets/logos/firebase.svg');
            }
        }
    }
}
</script>

<style scoped>
.project{
    width: 280px;
    height: 344px;
    background-color: #1e1e1e;
    border-radius: 15px;
    padding: 17px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.frame{
    width: 100%;
    height: 80%;
    background-color:#0B0B0D;
    border-radius: 15px;
    background-position: center;
    background-size: cover;
    cursor: pointer;   
}

.frame:hover{
    transform: scale(1.02);
}

.frame a::after{
    content: '';
    display: block;
    height: 100%;
    position: relative;
}

.Snake_Game .frame{
    background-image: url('../assets/snake.png');
}

.Perfilador .frame{
    background-image: url('../assets/projects/perfilador.png');
}


.Movie_Theater .frame{
    background-image: url('../assets/projects/movie.png');
}

.Snake_Game .frame{
    background-image: url('../assets/snake.png');
}


.CRUD.frame{
    background-image: url('../assets/projects/crud.png');
}


.nombre{
    padding: 10px 0;
}

.tec{
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.tec img{
    width: 25px;
    height: 25px;
}


@media screen and (max-width: 800px){
    .projects{
        height: max-content;
        justify-content: initial;
        align-items: initial;
    }   
    .project{
        margin-bottom: 30px;
    }
}



</style>