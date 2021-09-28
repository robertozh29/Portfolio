<template>
    <div class="contact" id="contact">
        <p>Get in touch!</p>
        <button @click="sendEmail">Contact</button>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    methods:{
        sendEmail(){
            window.open("mailto:robertozh29@hotmail.com");
        }
    }
}
</script>

<style scoped>
.contact{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

p{ 
    font-size: 72px; 
    font-weight: 100;
    letter-spacing: 0.13em;
}


.contact button{
    background: transparent;
    box-shadow: none;
    margin-top: 30px;
    padding: 15px 30px;
    border: 1px solid #2fceb3;
    border-radius: 5px;
    color: #2fceb3;
    cursor: pointer;
}


@media only screen and (max-width: 800px){
    .contact p{
        font-size: 2.5rem; 
    }
}
</style>