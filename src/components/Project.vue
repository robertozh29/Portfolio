<template>
       <div class="project" :class="name">
            <a :href="link" target="_blank"><img :src="require(`../assets/projects/${img}`)" alt="" srcset=""></a>
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
        img:{
            type: String,
            default: "default.png"
        },
        tech: Array
    },
    data(){
        return{
            h: 'react.svg'
        }
    },
    methods:{
        redirect(){
            window.open(this.link)
        },
        getImage(img){
             let h = 'react.svg';
            console.log(`../assets/logos/${h}`);
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
img{
    width: 99%;
    border-radius: 15px;
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