<template>
  <Home 
    :info="translation"
  />
</template>

<script>
// @ is an alias to /src
import Home from './Home'

export default {
  name: 'Español',
  components: {
    Home
  },
  data(){
    return{
      translation:{
        navbar:{
          sections: ["Inicio", "Sobre mi", "Proyectos", "Contacto"]
        },
        header:{
          profession: "Ingeniero en Sistemas",
          phrase: "Programador Web especializado en construir aplicaciones front-end.",
          resume: 'Curriculum',
          resumeLink: 'cv_esp.pdf'
        }
      }
    }
  }
}
</script>

<style>
.spanish{
  width: 100%;
  min-height: 100vh;
  background-color: #171717aa;
}

</style>

