<template>
    <div class="about" id="about">  

        <span class="subtitle"><p>01.</p><h2>About me</h2></span>    

        <div class="about-me">
                
            <p>Hello! My names is Robert, I'm a web developer  with a big passsion
                for technology and it's applicability. Since I was a kid I've been dreaming 
                about the future of technology that we as humans will be developing in the near future,
                now as an adult my dream it's to contribute and learn as much as I can 
                from the modern and future technologys.
            </p>
            <p>Currently I've been working developing Front-end and Back-end Web applications for a Marketign Agency and some freelancing projects,
                working with several frameworks and differents technologies such as:
            </p>
            <div class="tec">
                    <ul>
                        <li>HTML5</li>
                        <li>CSS/SASS</li>
                       
                    </ul>
                    <ul>
                        <li>Bootstrap</li>
                         <li>Javascript</li>  
                    </ul>
                    <ul>
                        <li>Vue.js</li>
                        <li>React.js</li>
                    </ul>
                    <ul>
                        <li>PHP</li>
                         <li>MySQL</li>
                    </ul>
            </div>
        </div>   

        <img src="../assets/yo.jpg" alt="">

    </div>
</template>

<style scoped>
.about{
    display: flex;
    justify-content: center;
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
    width: 70%;
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
    padding: 25px 15px;
    display: flex;
    justify-content: flex-start;
}

ul{
    margin-right: 15%;
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