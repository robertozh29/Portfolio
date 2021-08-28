<template>
  <Navbar />
  <div class="content">
    <Header />

    <div class="projects" id="projects">
      <Project 
        :position="'left'" 
        :link="'https://robertozh29.github.io/snakegame/'"
      />
      <Project :position="'right'"/>
      <Project :position="'left'" />
      <Project :position="'right'"/>
    </div>
    
  </div>
  <Social />
  <Lightsaber />
  <p class="hola">hola</p>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Lightsaber from './components/Lightsaber.vue'
import Social from './components/Social.vue'
import Project from './components/Project.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Lightsaber,
    Social,
    Project
  }
}
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  color: #cccccc;
  background-color: #171717;
}

.navbar{
  position: fixed;
  top: 0;
  left: 0;
}

.content{
  padding: 10vh 20vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
}

.projects{
  display: flex;
  flex-direction: column;
  width: 100%;
}

.social{
  position: fixed;
  bottom: 2.5px;
  left: calc(5vw - 40px);
}

.lightsaber{
  position: fixed;
  bottom: 2.5px;
  right: 5vw;
}

.hola{
  margin-top: 500vh;
  padding-bottom: 10vh;
}

</style>
