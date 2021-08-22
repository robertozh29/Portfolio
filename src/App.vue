<template>
  <Navbar/>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  background-color: #171717;
  min-height: 100vh;
}
</style>
