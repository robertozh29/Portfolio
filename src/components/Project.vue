<template>
       <div class="project" :class="name">
            <div class="frame" :class="name">
                <a class="proyect-link" target="_blank" href="https://robertozh29.github.io/snakegame/V2"></a>
            </div>
            <p>{{name}}</p>
            <div class="tec">
                <img src="../assets/logos/html_5.svg" alt="HTML5">
                <img src="../assets/logos/css_3.svg" alt="CSS3">
                <img src="../assets/logos/js.svg" alt="Javascript">
            </div>
        </div>  
</template>

<script>
export default {
    name: 'Project',
    props:{
        name: String,
        link: String
    },
    methods:{
        redirect(){
            window.open(this.link)
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