<template>
    <div class="projects" id="projects">
        <span class="subtitle"><p>02.</p><h2>My Projects</h2></span>
        <div class="projects-container">
            <Project 
                name="Snake Game" 
                link="https://robertozh29.github.io/snakegame"
                img="snake.png"
                :tech="['html','css', 'js']"
            />
            <Project
                name="React CRUD" 
                link="https://crud-da10d.web.app"
                img="crud.png"
                :tech="['react', 'firebase']"
            />
            <Project
                name="Menu Digital" 
                link="https://nostalgic-stonebraker-84b324.netlify.app/"
                img="lacasadelasflores.png"
                :tech="['html','css','js']"
            />
            
        </div>
        <div class="projects-container dos">
            
            <Project
                name="API consuming" 
                link="https://nifty-carson-901d54.netlify.app/"
                img="jsonplaceholder.png"
                :tech="['vue']"
            />
            <Project
                name="Perfilador Financiero" 
                link="http://perfilador.telescopiomx.com"
                img="perfilador.png"
                :tech="['vue']"
            />
            
        </div>
    </div>
</template>

<script>
import Project from './Project.vue'

export default {
    name: 'Projects',
    components:{
        Project
    }
}
</script>

<style scoped>
.projects{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.subtitle{
    width: 100%;
    margin-bottom: 30px;
    font-size: 18px;
}

.subtitle p{
    color: #2fceb3;
    
}

.projects-container{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 35px;
}
.dos{
    margin-top: 15px;
    justify-content: space-evenly;
}
@media only screen and (max-width: 800px){
    .subtitle{
        text-align: left;
    }
    .projects-container{
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
    }
}
</style>