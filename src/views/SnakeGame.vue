<template>
    <div>
        Hola mundo
    </div>
</template>


<script>
export default {
    name: 'SnakeGame',
    methods:{
        
    },
    created() {
        window.addEventListener("keydown", event => {
            event.preventDefault()
            console.log("87")
        })
    }
}
</script>