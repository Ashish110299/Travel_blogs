<template>
  <div class="topMenu container">
    <nuxt-link class="topMenu__logCont" to="/">
      <img src="~/assets/images/logo.png" alt="img" class="topMenu_logo">
    </nuxt-link>
    <div class="topMenu__menu">
      <nuxt-link to="/travel-blog" class="topMenu__menuItems">Hotel Experiences</nuxt-link>
      <nuxt-link to="/travel-blog" class="topMenu__menuItems">Hotel Experiences</nuxt-link>
      <nuxt-link to="/travel-blog" class="topMenu__menuItems">Hotel Experiences</nuxt-link>
      <nuxt-link to="/travel-blog" class="topMenu__menuItems">Hotel Experiences</nuxt-link>
      <nuxt-link to="/travel-blog" class="topMenu__menuItems">Hotel Experiences</nuxt-link>
    </div>
    <div class="topMenu__buttonCont">
      <nuxt-link to="/" class="topMenu__subscribe">
        Subscribe
      </nuxt-link>
    </div>
    <div class="topMenu__mobileMenu">
      <div class="topMenu__mobileMenu__tabsCont">
        <nuxt-link to="/travel-blog" class="topMenu__mobileMenu__menuItems">Hotel Experiences</nuxt-link>
        <nuxt-link to="/travel-blog" class="topMenu__mobileMenu__menuItems">Hotel Experiences</nuxt-link>
        <nuxt-link to="/travel-blog" class="topMenu__mobileMenu__menuItems">Hotel Experiences</nuxt-link>
        <nuxt-link to="/travel-blog" class="topMenu__mobileMenu__menuItems">Hotel Experiences</nuxt-link>
        <nuxt-link to="/travel-blog" class="topMenu__mobileMenu__menuItems">Hotel Experiences</nuxt-link>
      </div>
      <div>
        <img src="~/assets/images/menu.png" alt="" class="topMenu__mobileMenu-image" @click="mobileMenu()">
      </div>  
    </div>
  </div>
</template> 

<script>

  export default{
    data(){
      return {
        mobileMen: '',
      }
    },

    methods: {
      async mobileMenu() {
        var x = document.getElementById("topMenu__mobileMenu__tabsCont");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "none";
        }
      }
    }
  }

</script>

<style>

</style>