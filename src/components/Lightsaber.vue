<template>
    <div class="lightsaber">
        <div class="light" id="light"></div>
        <img src="../assets/saber.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'Lightsaber',
    data(){
      return{
          hola: 500,
          scrollBefore: 0
      }  
    },
    methods:{
        scrollDown(){          
            const scrolled = window.scrollY;

            if(this.scrollBefore > scrolled){
                console.log("ScrollUP");
                this.scrollBefore = scrolled;
                //Desired action
                document.getElementById('light').style.height = (this.hola++ + 'px')
                document.getElementById('light').style.height = (this.hola++ + 'px')
                document.getElementById('light').style.height = (this.hola++ + 'px')
            }else{
                this.scrollBefore = scrolled;
                console.log("ScrollDOWN");
                //Desired action   
                document.getElementById('light').style.height = (this.hola-- + 'px')
                document.getElementById('light').style.height = (this.hola-- + 'px')
                document.getElementById('light').style.height = (this.hola-- + 'px')
            }
        }
    },
    mounted(){
        
        document.addEventListener('scroll', ()=>{
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                console.log("estas al final de la pagina")
            }else{
                this.scrollDown()
            }          
            
        })
    }
}
</script>

<style scoped>
.saber{
    display: flex;
    flex-direction: column;
    align-items: center; 
}

img{
    width: 40px;
    z-index: 1;
}

.light{
    height: calc(80vh - 90px);
    width: 6px;
    background-color: #2fceb3;
    border-radius: 5px 5px 0 0;
    position:relative;
    top: 10px;
    left: 19px;
    z-index: -1;
    /*BOX SHADOW*/
    box-shadow: 0px 0px 10px 5px rgba(50,206,179,0.75);
    -webkit-box-shadow: 0px 0px 10px 5px rgba(50,206,179,0.75);
    -moz-box-shadow: 0px 0px 10px 5px rgba(50,206,179,0.75);
}

</style>