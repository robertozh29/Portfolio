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
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

p{ 
    font-size: 72px; 
    font-weight: 500;
}


.contact button{
    background: transparent;
    box-shadow: none;
    margin-top: 15px;
    padding: 15px 30px;
    border: 1px solid #2fceb3;
    border-radius: 5px;
    color: #2fceb3;
    cursor: pointer;
}
</style>