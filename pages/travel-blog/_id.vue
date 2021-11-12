<template>
  <div class="about container">
    <Aboutheader />
    <About/>
  </div>
</template>

<script>
import Aboutheader from '~/components/Aboutheader.vue'
import About from '~/components/About.vue'
  export default {
  components: { 
    Aboutheader,
    About,
    },
  }
</script>

<style lang="scss" scoped>

</style>