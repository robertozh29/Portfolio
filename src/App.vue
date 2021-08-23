<template>
  <Navbar />
  <div class="content">
    <Header />
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

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Lightsaber,
    Social
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
  padding: 20vh 10vw;
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
