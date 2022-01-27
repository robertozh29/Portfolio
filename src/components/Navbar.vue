<template>
    <nav class="navbar">
        <div class="logo">
            <a href="./" @click.prevent="scrollTo('#header')">
                <div class="square">
                    <p>R</p>
                </div>
            </a>
        </div>

        <ul id="menu">
            <li>1.0
                <a href="#header" @click.prevent="scrollTo('#header')">Home</a>
            </li>
            <li>2.0
                <a href="#about" @click.prevent="scrollTo('#about')">About</a>
            </li>
            <li>3.0
                <a href="#projects" @click.prevent="scrollTo('#projects')">Projects</a>
            </li>
            <li>4.0
                <a href="#contact" @click.prevent="scrollTo('#contact')">Contact</a>
            </li>    
            <li>
                <a href="#">Español</a>
            </li>  
        </ul>
        <div class="hamburger">
            <a class="main-nav-toggle" @click.prevent="activeMenu">
                <i>Menu</i>
            </a>
        </div> 
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{
            checked: false
        }
    },
    methods:{
        scrollTo(selector){
            document.querySelector(selector).scrollIntoView({behavior: 'smooth'})
            document.getElementById('menu').style.display = "none";
        },
        activeMenu(event){
            const menu = document.getElementById('menu');

            if(event.target.classList.contains("active-menu")){
                event.target.classList.remove("active-menu");
                menu.style.display = "none";
            }else{
                event.target.classList.add("active-menu");
                menu.style.display = "flex";
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
 }

 .logo{
    margin-left: 3vw;
}

.square{
    border: 2px solid #2fceb3;
    height: 6vh;
    width: 6vh;
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
    transition: 0.5s ease;
}

.square:hover p{
    transform: rotate(-90deg);
}

 
ul{
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 4vw;
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
    height: 26px;
    margin-right: 7vw;
}

.hamburger i {
    display: block;
    text-indent: 100%;
    overflow: hidden;
    white-space: nowrap;
    height: 4px;
    background-color: #2fceb3;
    width: 100%;
    position: absolute;
    top: 50%;
    transition: all ease-out 0.1s;
}

a.main-nav-toggle{
    display: block;
    width: 28px;
    height: 16px;
    position: relative;
}    

a.main-nav-toggle::after,
a.main-nav-toggle::before{
    content: '';
    position: absolute;
    top: 0;
    height: 0;
    border-bottom: 4px solid #2fceb3;
    width: 100%;
    left: 0;
    right: 0;
    transition: all ease-out 0.3s;
}

a.main-nav-toggle::after{
    top: 100%;
}

a.main-nav-toggle.active-menu::after{
    transform: rotate(-45deg);
    transform-origin: center;
    top: 50%;
}

a.main-nav-toggle.active-menu::before{
    transform: rotate(45deg);
    transform-origin: center;
    top: 50%
}

a.main-nav-toggle.active-menu i{
    opacity: 0;
}

@media only screen and (max-width: 800px){
    .logo{
        margin-left: 5vw;
    }
    ul{
        display: none;
       width: 100%;
       height: 90vh;
       position: fixed;
       bottom: 0;
       flex-direction: column;
       justify-content: space-evenly;
       padding-bottom: 25%;
       background: #171717cc;
    }
    .hamburger{
        display: inline-block;
    }
}
</style>