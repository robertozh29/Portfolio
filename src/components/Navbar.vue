<template>
    <nav class="navbar">
        <div class="logo">
            <a href="./">
                <div class="square">
                    <p>R</p>
                </div>
            </a>
        </div>

        <div class="links" id="links">
            <ul>
                <li>1.0
                    <a href="#about">About</a>
                </li>
                <li>2.0
                    <a href="#experience">Experience</a>
                </li>
                <li>3.0
                    <a href="#projects">Projects</a>
                </li>
                <li>4.0
                    <a href="#contact">Contact</a>
                </li>    
            </ul>
            <div class="resume">
                <a class="boton" href="CV_English.pdf" target="_blank">CV</a>
            </div> 
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
        show(){
            if(this.checked){
                document.getElementById('links').style.display = "flex"
            }
        },
        close(){
            if(!this.checked){
                document.getElementById('links').style.display = "none"
            }
        }
    },
}
</script>

<style scoped>
 .navbar{
    width: 100%;
    height: 10vh;
    background-color: #171717;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

.links{
     width: max-content;
     display: flex;
     align-items: center;
     margin-right: 6vw;
 }
 
 ul{
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 25px;
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
    background: transparent;
    padding: 10px 15px;
    border: 1px solid #2fceb3;
    border-radius: 5px;
    color: #2fceb3;
    position: relative;
}


@media only screen and (max-width: 800px){
    .logo{
        margin-left: 5vw;
    }
    ul{
        display: none;
    }
}
</style>