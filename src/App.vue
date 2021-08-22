<template>
  <Navbar />
  <div class="content">
    <Header />
  </div>
  <Lightsaber />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Lightsaber from './components/Lightsaber.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Lightsaber
  }
}
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  color: #cccccc;
  background-color: #171717;
  min-height: 500vh;
}

.navbar{
  position: fixed;
  top: 0;
  left: 0;
}

.content{
  padding: 20vh 10vw;
}

.lightsaber{
  position: fixed;
  bottom: 2.5px;
  right: 5vw;
}


</style>
