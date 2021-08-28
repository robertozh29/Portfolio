<template>
    <div class="project" :class="side">
        <div class="imagen" @click="redirect"></div>
        <div class="descripcion"></div>
    </div>    
</template>

<script>
export default {
    name: 'Project',
    props:{
        position: String,
        link: String
    },
    methods:{
        redirect(){
            window.open(this.link)
        }
    },
    computed:{
        side: function(){
            console.log(this.position)
            return this.position == 'right' ? 'right' : 'left';
        }
    }
}
</script>

<style scoped>
.project{   
    width: 750px;
    height: 300px;
    margin-bottom: 50px;
    background-color: #191919;
    display: flex;
    border-radius: 8px;
    overflow: hidden;
}

.left{
    align-self: flex-start;
    flex-wrap: wrap;
}

.right{
    align-self: flex-end;
    flex-direction: row-reverse;
}

.imagen{
    width: 450px;
    height: 300px;
    background-image: url('../assets/snake.png');
    background-size: cover;
    
    cursor: pointer;
}

.imagen::after{
    content: "";
    background-color: rgba(47, 206, 179,0.3);
    display: inline-block;
    width: 100%;
    height: 100%;
    transition: 0.5s;
}

.imagen:hover::after{
    background-color: rgba(47, 206, 179,0.0);
}




.descripcion{
    width: 334px;
}
</style>