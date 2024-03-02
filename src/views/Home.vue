<template>
    <div class="home">
        <Navbar />
        <div class="content">
            <header class="header">
                <div class="typewriter">
                    <h1>Hello there...</h1>
                </div>
                <h1>Roberto Zepeda</h1>
                <h2>Systems Engineer</h2>
                <p>Developer specialized in building Web applications</p>
                <a class="boton" @click="openResume">Resume</a>
            </header>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
    name: 'Home',
    components:{
        Navbar
    },
    data () {
      return {}
    }
}

</script>

<style>

/* Home Container */
.home{
    width: 100%;
    min-height: 100vh;
    background-color: #171717;
    text-align: left;
}

.home .navbar{
  position: fixed;
}

.content{
  width: 100%;
  padding: 0 15vw;
}

.header,
.about,
.projects,
.contact{
  min-height: 100vh;
  padding-top: 5vh;
}

/* Header */
.header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height:100%;
    width: 100%;
}

.header .typewriter{
    margin-bottom:30px ;
} 

.header .typewriter h1 {
  color: #2fceb3;
  font-family: 'iconsolata',monospace;
  font-size: 20px;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 2.5s steps(14, end),
    blink-caret 0.8s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}

.header h1{ font-size: 68px;  color:#FFF;}

.header h2{ font-size: 72px; margin-bottom: 25px; }

.header p{ 
    font-size: 18px; 
    line-height: 30px;
    letter-spacing: 0.15em;
}

.header .boton{
    background: transparent;
    box-shadow: none;
    margin-top: 50px;
    padding: 15px 30px;
    border: 1px solid #2fceb3;
    border-radius: 5px;
    color: #2fceb3;
    cursor: pointer;
}
</style>