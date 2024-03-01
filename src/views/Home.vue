<template>
    <div class="home">
        <Navbar 
            :sections="info.navbar.sections"
        />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
    name: 'Home',
    data () {
      return {}
    }
}

</script>

<style>
/*----- HOME CONTAINER ----- */
.home{
  width: 100%;
  min-height: 100vh;
  background-color: #171717;
  text-align: left;
}
</style>