<template>
  <div class="app">

    <!--Layout-->
    <Navbar />
    <Social />
    <Lightsaber />
    <!--End Layout-->
    <div class="content">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>

  </div>
</template>

<script>
// Layout
import Navbar from './components/Navbar.vue'
import Social from './components/Social.vue'
import Lightsaber from './components/Lightsaber.vue'

// Content
import Header from './components/Header.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
// 



export default {
  name: 'App',
  components: {
    Navbar,
    Lightsaber,
    Social,
    Header,
    About,
    Projects,
    Contact
  }
}
</script>

<style>
.app{
  width: 100vw;
  min-height: 100vh;
  font-family: 'Raleway';
  -webkit-font-smoothing: antialiased;
  color: #cccccc;
  background-color: #171717;
}

.navbar{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}

.content{
  padding: 0 30vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.header{
  min-height: 110vh;
}

.about{
  min-height: 100vh;
}

.projects{
  min-height: 100vh;
}

.contact{
  min-height: 100vh;
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

@media screen and (max-width: 800px){
    .app{
      width: 100%;
    }
    .social{
      display: none;
    }
    .content{
      padding: 0 5%;
    }
    .lightsaber{
      bottom: 2.5px;
      right: -10px;
    }
}

</style>
