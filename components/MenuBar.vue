<template>
  <div class="topMenu container">
    <nuxt-link class="topMenu__logCont" to="/">
      <img src="~/assets/images/logo.png" alt="img" class="topMenu_logo">
    </nuxt-link>
    <div class="topMenu__menu">
      <nuxt-link to="/hotel-experience" class="topMenu__menuItems">Hotel Experiences</nuxt-link>
      <nuxt-link to="/best-travel-place" class="topMenu__menuItems">Best travel places</nuxt-link>
      <nuxt-link to="/cheap-traveling-ideas" class="topMenu__menuItems">Cheap traveling ideas</nuxt-link>
      <nuxt-link to="/wild-life-safari" class="topMenu__menuItems">Wildlife Safari</nuxt-link>
      <nuxt-link to="/best-street-food" class="topMenu__menuItems">Best Street food </nuxt-link>
    </div>
    <div class="topMenu__buttonCont">
      <nuxt-link to="/" class="topMenu__subscribe">
        Subscribe
      </nuxt-link>
    </div>
    <div class="topMenu__mobileMenu">
      <div class="topMenu__mobileMenu__tabsCont">
        <nuxt-link to="/hotel-experience" class="topMenu__mobileMenu__menuItems">Hotel Experiences</nuxt-link>
        <nuxt-link to="/best-travel-place" class="topMenu__mobileMenu__menuItems">Best travel places</nuxt-link>
        <nuxt-link to="/cheap-traveling-ideas" class="topMenu__mobileMenu__menuItems">Cheap traveling ideas</nuxt-link>
        <nuxt-link to="/wild-life-safari" class="topMenu__mobileMenu__menuItems">Wildlife Safari</nuxt-link>
        <nuxt-link to="/best-street-food" class="topMenu__mobileMenu__menuItems">Best Street food</nuxt-link>
      </div>
      <div> 
        <img src="~/assets/images/menu.png" alt="" class="topMenu__mobileMenu-image" @click="showMobileMenu()">
      </div>
    </div>
  </div>
</template> 

<script>
  
  export default{
    data(){
      return {
       
      }
    },

    methods: {
      async showMobileMenu() {
        var MobileMenu = document.getElementById("topMenu__mobileMenu__tabsCont");
        if (MobileMenu.style.display === "none") {
          MobileMenu.style.display != "none";
        } else {
          MobileMenu.style.display = "none";
        }
      }
    }
  }

</script>

<style>

</style>