<template>
    <div class="about" id="about">  

        <span class="subtitle"><p>02.</p><h2>About me</h2></span>    

        <div class="about-me">
                
            <p>{{ description }}</p>
            <p>{{ experience }}</p>
            <div class="tec">
                    <ul>
                        <li>Python</li>
                        <li>Javascript</li>
                       
                    </ul>
                    <ul>
                        <li>SQL</li>
                        <li>Vue.js</li>
                       
                    </ul>
                    <ul>
                        <li>Flask</li>
                        <li>Google Cloud</li>  
                    </ul>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>Firebase</li>
                    </ul>
            </div>
        </div>   

    </div>
</template>

<script>
export default {
    props:{
        description: String,
        experience: String
    }
}
</script>

<style scoped>
.about{
    display: flex;
    justify-content: stretch;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
}

.subtitle{
    width: 100%;
    margin-bottom: 30px;
    font-size: 18px;
}

.about-me{
    width: 100%;
}

.about img{
    width: 20%;
    height: auto;
    margin: 5%;
    border-radius: 5px;
}

.about-me p:first-of-type{
    margin-bottom: 15px;
}



span p{
    color: #2fceb3;
}

h2{
    font-size: 28px;
}

p{
    font-size: 17px;
    line-height: 1.6;
    letter-spacing: 0.05em;
}

.experiencia{
    margin: 18px 0;
}

.tec{
    padding: 30px 15px 25px 15px;
    display: flex;
    justify-content:space-between;
}

ul{
    line-height: 2;
}
ul li{
    list-style: none;
}

ul li::before {
  content: "\2022";
  color: #2fceb3;
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
}


img{
    width: 80%;
}
@media screen and (max-width: 800px){
    .about-me{
        width: 100%;
    }
    .contenido{
        width:100%;
    }
    .img-container{
        display: none;
    }

    .tec{
        flex-wrap: wrap;
    }

    .tec ul{
        width: 40%;
        margin: 0;
        margin-left: 10%;
    }

    img{
        display: none;
    }

}

</style>