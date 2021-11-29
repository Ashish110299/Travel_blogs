<template>
  <div class="aboutHeader" v-if="aboutheader">
    <!-- <pre>{{aboutheader}}</pre> -->
    <div class="aboutHeader__banerCont">
      <img :src="`${aboutheader.x_featured_media_large}`" alt="" class="aboutHeader__banner">
      <h1 class="aboutHeader__bannerTitle" v-html="aboutheader.title.rendered"> 
      </h1>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['aboutheader']
  }
</script>

<style lang="scss" scoped>

</style>  