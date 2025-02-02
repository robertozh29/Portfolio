<template>
    <div class="lightsaber" id="lightsaber">
        <div class="light-container" id="ligh-container">
            <div class="light" id="light"></div>
        </div>
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
        scrollIndicator(){
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;       

            var width =  document.documentElement.clientWidth;
            if(width < 800){
                document.getElementById("ligh-container").style.height = 75 - ((scrolled * 75 )/100) + "vh";
            }else{
                document.getElementById("ligh-container").style.height = 70 - ((scrolled * 70 )/100) + "vh";
            }
            
        }
    },
    mounted(){  
        document.addEventListener('scroll', ()=>{        
            this.scrollIndicator()
        })
    }
}
</script>

<style scoped>
.lightsaber{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 90vh;
    z-index: 0;
}

img{
    height: 10vh;
    z-index: 1;
}

.light-container{
    height: 70vh;
    z-index: -1;
    display: flex;
}

.light{
    width: 5px;
    background-color: #2fceb3;
    border-radius: 5px 5px 0 0; 
    /*BOX SHADOW*/
    box-shadow: 0px 0px 10px 5px rgba(50,206,179,0.75);
    -webkit-box-shadow: 0px 0px 10px 5px rgba(50,206,179,0.75);
    -moz-box-shadow: 0px 0px 10px 5px rgba(50,206,179,0.75);
}

@media screen and (max-width: 800px){
    .light{
        width: 3px;
         box-shadow: 0px 0px 7px 2px rgba(50,206,179,0.75);
    }
    img{
        height: 7vh;
        z-index: 1;
    }
    .light-container{
        height: 75vh;
        z-index: -1;
        display: flex;
    }
}

</style>