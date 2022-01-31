<template>
  <div class="home">
    <Navbar 
      :sections="info.navbar.sections"
    />
    <Social />
    <Lightsaber />
    <div class="content">
      <Header 
        :profession="info.header.profession"
        :phrase="info.header.phrase"
        :resume="info.header.resume"
      />
      <About />
      <Projects />
      <Contact />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Lightsaber from '../components/Lightsaber.vue'
import Social from '../components/Social.vue'
import Header from '../components/Header.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

export default {
  name: 'Home',
  props:{
    info:{
      type: Object,
      default(){
        return{
          navbar:{
            sections: ["Home", "About", "Projects", "Contact"]
          },
          header:{
            profession: "Computer Engineer",
            phrase: "Hi. I'm a Developer specialized in building Front-end Web applications.",
            resume: 'Resume',
            resumeLink: "cv_eng.pdf"
          }
        }
      }
    }
  },
  components: {
    Navbar,
    Header,
    About,
    Projects,
    Contact,
    Lightsaber,
    Social
  },
  data(){
    return{
      sections: ['Home','About','Projects','Contact']
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  min-height: 100vh;
  background-color: #171717;
  text-align: left;
  .navbar{
    position: fixed;
  }
  .social{
    position: fixed;
    bottom: 0;
    left: 5vw;
  }
  .lightsaber{
    position: fixed;
    bottom: 0;
    right: 5vw;
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
    .subtitle{
      font-size: 5px;
    }
  }
}

@media screen and (max-width: 800px){
  .home{
    .social{
      display: none;
    }
    .lightsaber{
      bottom: 2.5px;
      right: -10px;
    }
    .content{
      padding: 0 10vw;
    }
    header,
    .about,
    .projects,
    .contact{
      padding-top: 18px;
    }
  }
}

</style>>

