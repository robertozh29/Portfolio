<template>
    <nav class="navbar">
        <div class="logo">
            <a href="./">
                <div class="square">
                    <p>R</p>
                </div>
            </a>
        </div>

        <div class="links">
            <ul>
                <li>1.0
                    <a href="#About">About</a>
                </li>
                <li>2.0
                    <a href="#Experience">Experience</a>
                </li>
                <li>3.0
                    <a href="#Projects">Projects</a>
                </li>
                <li>4.0
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
            
            <a class="boton" href="../../CV_Español.pdf" target="_blank">Resume</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
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
     margin-right: 4vw;
 }
 
 ul{
    display: flex;
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

 li a:hover{
     color: #2fceb3;
     text-decoration: underline;
 }

.boton{
    background: transparent;
    box-shadow: none;
    padding: 10px 15px;
    border: 1px solid #2fceb3;
    border-radius: 5px;
    color: #2fceb3;
}

</style>