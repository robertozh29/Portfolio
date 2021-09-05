<template>
  <Navbar />
  <div class="content">
    <Header />
    <About />

    <div class="projects" id="projects">
      <span><p>02.</p><h2>My projects</h2></span>
      <Project 
        :name="'Snake_Game'" 
        :link="'https://robertozh29.github.io/snakegame/V2'"
      />
      <Project
        :position="'right'"
      />
      <Project 
        :position="'left'" 
      />
    </div>
    
  </div>
  <Social />
  <Lightsaber />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Lightsaber from './components/Lightsaber.vue'
import Social from './components/Social.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    About,
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

.about{
  margin: 0 7vw;
}

.projects{
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  margin: 0 7vw;
}

.projects span{
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
}

.projects span h2{
    font-size: 28px;
}

.projects span p{
    color: #2fceb3;
    font-size: 24px;
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


</style>
