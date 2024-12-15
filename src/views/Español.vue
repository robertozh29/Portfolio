<template>
  <div class="espanol"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Español',
  components: {
    
  },
  data(){
    return{
      translation:{
        navbar:{
          sections: ["Inicio", "Sobre mi", "Proyectos", "Contacto"]
        },
        header:{
          profession: "Ingeniero en Sistemas",
          phrase: "Experiencia en desarrollar soluciones de software",
          resume: 'Curriculum',
          resumeLink: 'cv_esp.pdf'
        },
        about:{
          description:`Mi nombre es Roberto, soy un programador de software con una gran pasion por la tecnologia
                y su aplicabilidad. Desde que soy niño he soñado con la tecnologia que nosotros como humanos estaremos
                desarrollando en un futuro no muy lejano. Siendo ya un adulto,  mi sueños es contribuir y aprender 
                lo maximo posible de las tecnologias modernas y futuras`,
          experience: `Actualmente trabajo desarrollando web, front-end y back-end para una agencia de marketing, al igual que 
          algunos proyectos independientes. Trabajo con diferentes tecnologias y frameworks tales como:`
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

