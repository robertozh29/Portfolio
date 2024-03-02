<template>
    <div class="home">
        <header class="header">
            <div class="typewriter">
                <h1>Hello there...</h1>
            </div>
        </header>
    </div>
</template>

<script>

export default {
    name: 'Home',
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

/* Header */
.header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height:100%;
    width: 100%;
}

.typewriter{
    margin-bottom:30px ;
} 

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