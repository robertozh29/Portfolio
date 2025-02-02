<template>
    <nav class="navbar">
        <div class="logo">
            <a href="./" @click.prevent="scrollTo('#header')">
                <div class="square">
                    <p>R</p>
                </div>
            </a>
        </div>

        <ul id="menu" class="">
            <li>1.0
                <a href="#header" @click.prevent="scrollTo('#header')">{{sections[0]}}</a>
            </li>
            <li>2.0
                <a href="#about" @click.prevent="scrollTo('#about')">{{sections[1]}}</a>
            </li>
            <li>3.0
                <a href="#projects" @click.prevent="scrollTo('#projects')">{{sections[2]}}</a>
            </li>
            <li>4.0
                <a href="#contact" @click.prevent="scrollTo('#contact')">{{sections[3]}}</a>
            </li>    
            <li>
                <router-link to="/">Eng</router-link> |
                <router-link to="/es">Esp</router-link>
            </li>  
        </ul>
        <div class="hamburger" id="hamburger" @click="activeMenu">
            <div></div>
        </div> 
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props:{
        sections:{
            type: Array,
            default(){
                return ['Home','About','Projects','Contact']
            }
        }
    },
    data(){
        return{
            checked: false
        }
    },
    methods:{
        scrollTo(selector){
            document.querySelector(selector).scrollIntoView({behavior: 'smooth'})
            if(window.screen.width <= 800){
                this.activeMenu() 
            }
        },
        activeMenu(){
            const menu = document.getElementById('menu');
            const hamburger = document.getElementById('hamburger');

            if(hamburger.classList.contains("active-menu")){
                hamburger.classList.remove("active-menu");
                menu.classList.remove('active')
            }else{
                hamburger.classList.add("active-menu");
                menu.classList.add('active')
            }
        }
    },
}
</script>

<style scoped>
 .navbar{
    width: 100%;
    height: 10vh;
    min-height: 80px;
    background-color: #171717;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: monospace;
    z-index: 2;
 }

 .logo{
    margin-left: 3vw;
}

.square{
    border: 2px solid #2fceb3;
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s ease;
}

.square:hover{
    border-radius: 50%;
    transform: rotate(90deg);
}
  
.square p{
    color: #2fceb3;
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
}

.square:hover p{
    transform: rotate(-90deg);
}

 
ul{
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 4vw;
    transition: all 3s ease-in-out;
}
 
li{
    margin: 0 15px;
     color: #2fceb3;
 }

a{
    color: inherit; 
    text-decoration: inherit; 
    color:#CCC;
}

li a:hover, .dropdown a:hover {
     color: #2fceb3;
     text-decoration: underline;
}

.resume a{
    color: #2fceb3;
    padding-bottom: 2px;
    border-bottom: 1px solid #2fceb3;
}


/*Hamburger Menu */
.hamburger{
  display: none;
  width: 35px;
  margin-right: 5vw;
}

.hamburger div,
.hamburger::after,
.hamburger::before{
  background: #2fceb3;
  content: "";
  display: block;
  height: 4px;
  border-radius: 3px;
  margin: 7px 0;
  transition: 0.5s;
}

.hamburger.active-menu::after{
     transform: translateY(-8px) rotate(135deg);
}

.hamburger.active-menu::before{
 transform: translateY(13px) rotate(-135deg);
}

.hamburger.active-menu div{
    opacity: 0;
}

@media only screen and (max-width: 800px){
    .logo{
        margin-left: 5vw;
        z-index: 1;
    }
    ul{
        display: none;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        flex-direction: column;
        justify-content: space-evenly;
        padding-bottom: 10%;  
        background-color: #171717;   
        opacity: 0;
        transform: translateX(100%);
        transition: all .5s linear;
    }
    ul.active{  
        display: flex;
        transform: translateX(0%);
        opacity: 0.99;
    }
    .hamburger{
        display: inline-block;
    }
}
</style>