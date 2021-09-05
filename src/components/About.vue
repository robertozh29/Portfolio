<template>
    <div class="about">
        <div class="contenido">
            <span><p>01.</p><h2>About me</h2></span>
            <p>Hello! My names is Robert, I'm a web developer  with a big passsion
                for technology and it's applicability. Since I was a kid I've been dreaming 
                about the future of technology that we as humans will be developing in the near future,
                now as an adult my dream it's to contribute and learn as much as I can 
                from the modern and future technologys.
            </p>

            <div class="experiencia">
                <p>Currently I've been working developing Front-end and Back-end Web applications for a Marketign Agency and some freelancing projects,
                    working with several frameworks and differents technologies such as:
                </p>
                <div class="tec">
                    <ul>
                        <li>HTML5</li>
                        <li>CSS/SASS</li>
                        <li>Javascript</li>  
                    </ul>
                    <ul>
                        <li>Bootstrap</li>
                        <li>Vue.js</li>
                        <li>React.js</li>
                    </ul>
                    <ul>
                        <li>PHP</li>
                        <li>Node.js</li>
                         <li>MySQL</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="img-container">
            <img src="../assets/falcon2.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.about{
    display: flex;
    height: 90vh;
    align-items: flex-start;
    padding: 10vh 0;
}

.contenido{
    width: 60%;
}

.img-container{
    width: 40%;
}

span{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

span p{
    color: #2fceb3;
    font-size: 24px;
}

h2{
    font-size: 28px;
}

p{
    font-size: 16px;
    line-height: 1.4;
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

.img-container{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 3%;
}
img{
    width: 80%;
}

</style>