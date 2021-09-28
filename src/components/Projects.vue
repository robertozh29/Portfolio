<template>
    <div class="projects" id="projects">
        <span class="subtitle"><p>02.</p><h2>My Projects</h2></span>
        <div class="projects-container">
            <Project 
                :name="'Movie_Theater'" 
                :link="'https://robertozh29.github.io/salaCine/'"
                :tech="['html','css', 'js']"
            />
            <Project
                :name="'Perfilador'" 
                :link="'http://perfilador.telescopiomx.com'"
                :tech="['vue']"
            />
            <Project 
                :name="'Snake_Game'" 
                :link="'https://robertozh29.github.io/snakegame/V2'"
                :tech="['html','css', 'js']"
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
}

@media only screen and (max-width: 800px){
    .subtitle{
        text-align: center;
    }
    .projects-container{
        flex-direction: column;
        align-items: center;
    }
}
</style>