<template>
  <div class="aboutHeader">
    <div class="aboutHeader__banerCont">
      <img src="~/assets/images/photo.png" alt="" class="aboutHeader__banner">
      <h1 class="aboutHeader__bannerTitle">
        Palatial, palatable Portugal: a long weekend 
        in Porto and the Douro
      </h1>
    </div>
  </div>
</template>

<script>
  export default {

    data(){
      return{
        aboutHeader: [],
        }
    },

    methods:{
      async fetch() {
        this.aboutHeader = await fetch(
          'http://firstproject.test/wp-json/wp/v2/pages/'
        ).then(res => res.json());
        console.log(wordPresAPI);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>