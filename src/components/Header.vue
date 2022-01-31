<template>
    <div class="header" id="header">
        <div class="typewriter">
            <h1>Hello there...</h1>
        </div>
        <h1>Roberto Zepeda</h1>
        <h2>{{profession}}</h2>
        <p>{{phrase}}</p>
        <a class="boton" @click="openResume">{{resume}}</a>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props:{
    profession: {
      type: String,
      default: "Web Developer"
    },
    phrase:{
      type: String,
      default: "I'm a computer engineer specializing in building Front-End Web applications."
    },
    resume: {
      type: String,
      default: "Resume"
    },
    resumeLink: {
      type: String,
      default: "cv_eng.pdf"
    }
  },
  methods:{
    scrollTo(selector){
      document.querySelector(selector).scrollIntoView({behavior: 'smooth'})
    },
    openResume(){
      window.open(this.resumeLink);
    }
  }
}
</script>

<style scoped>
.header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height:100%;
    width: 100%;
}

h1{ font-size: 68px;  color:#FFF;}

h2{ font-size: 72px; margin-bottom: 25px; }

p{ 
  font-size: 18px; 
  line-height: 30px;
  letter-spacing: 0.15em;
}

.typewriter{
    margin-bottom:30px ;
}   

.boton{
    background: transparent;
    box-shadow: none;
    margin-top: 50px;
    padding: 15px 30px;
    border: 1px solid #2fceb3;
    border-radius: 5px;
    color: #2fceb3;
    cursor: pointer;
}

/* DEMO-SPECIFIC STYLES */ 
.typewriter h1 {
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

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}

a{
  text-decoration: none;
}

@media screen and (max-width: 800px){
    .header{
      margin: 0;
      width: 100%;
    }
    h1{ font-size: 54px;  color:#FFF;}

    h2{ font-size: 42px; margin: 5px 0 25px 0; }

    p{ font-size: 16px; line-height: 28px }
}
</style>