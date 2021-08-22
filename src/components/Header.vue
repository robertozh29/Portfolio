<template>
    <div class="header">
        <div class="typewriter">
            <h1>Hello there...</h1>
        </div>
        <h1>I'M Robert</h1>
        <h2>Web Developer</h2>
    </div>
</template>

<style scoped>
.header{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    margin: 0 5vw;
}

h1{ font-size: 68px;  color:#FFF;}

h2{ font-size: 72px;  }

p{ font-size: 42px }

.typewriter{
    margin-bottom:30px ;
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
</style>