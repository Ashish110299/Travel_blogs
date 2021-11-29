<template>
  <div class="topMenu container">
    <nuxt-link class="topMenu__logCont" to="/">
      <img src="~/assets/images/logo.png" alt="img" class="topMenu_logo">
    </nuxt-link>
    <div class="topMenu__menu">
      <nuxt-link to="/blog-posts" class="topMenu__menuItems">All Posts</nuxt-link>
      <nuxt-link to="/hotel-experience" class="topMenu__menuItems">Hotel Experiences</nuxt-link>
      <nuxt-link to="/best-travel-place" class="topMenu__menuItems">Best travel places</nuxt-link>
      <nuxt-link to="/cheap-traveling-ideas" class="topMenu__menuItems">Cheap traveling ideas</nuxt-link>
      <nuxt-link to="/wild-life-safari" class="topMenu__menuItems">Wildlife Safari</nuxt-link>
      <nuxt-link to="/best-street-food" class="topMenu__menuItems">Best Street food </nuxt-link>
      <nuxt-link to="/food" class="topMenu__menuItems">Food</nuxt-link>
      <!-- <nuxt-link to="/food" class="topMenu__menuItems">Travel</nuxt-link> -->
    </div>
    <div class="topMenu__buttonCont">
      <button  class="topMenu__subscribe" @click="focusOnMobile()">
        Subscribe
      </button>
    </div>
    <div class="topMenu__mobileMenu">
      <div class="topMenu__mobileMenu__tabsCont" id="mobileMenu">
        <nuxt-link to="/blog-posts" class="topMenu__mobileMenu__menuItems">All Posts</nuxt-link>
        <nuxt-link to="/hotel-experience" class="topMenu__mobileMenu__menuItems">Hotel Experiences</nuxt-link>
        <nuxt-link to="/best-travel-place" class="topMenu__mobileMenu__menuItems">Best travel places</nuxt-link>
        <nuxt-link to="/cheap-traveling-ideas" class="topMenu__mobileMenu__menuItems">Cheap traveling ideas</nuxt-link>
        <nuxt-link to="/wild-life-safari" class="topMenu__mobileMenu__menuItems">Wildlife Safari</nuxt-link>
        <nuxt-link to="/best-street-food" class="topMenu__mobileMenu__menuItems">Best Street food</nuxt-link>
        <nuxt-link to="/food" class="topMenu__mobileMenu__menuItems">Food</nuxt-link>
        <!-- <nuxt-link to="/food" class="topMenu__mobileMenu__menuItems">travel</nuxt-link> -->
      </div>
      <div href="javascript:void(0);" class="topMenu__mobileMenu__icon" @click="showMobileMenu()"> 
        <img src="~/assets/images/menu.png" alt="" class="topMenu__mobileMenu-image">
      </div>
    </div>
  </div>
</template> 

<script>
import Button from './Button.vue';
  
  export default{
  components: { Button },

    methods: {
      async showMobileMenu() {
      let MobileMenu = document.getElementById("mobileMenu");
        if (MobileMenu.style.display === "block") {
          MobileMenu.style.display = "none";
          
        } else {
          MobileMenu.style.display = "block";
        } 
      },

      async focusOnMobile(){
        document.getElementById("subscription").focus();
      },

      async asyncData({$axios}) {
        if(localStorage.getItem(`hotelExp`) === null){
          var BlogsCards = await $axios.$get(
            `http://firstproject.test/wp-json/wp/v2/pages/`
          )
          let BlogsCards__serialized =  JSON.stringify(BlogsCards);
          localStorage.setItem(`hotelExp`,BlogsCards__serialized);
        }
        else{
          let reusltById = localStorage.getItem(`hotelExp`)
          var BlogsCards = JSON.parse(reusltById)
        }
        return{
          BlogsCards
        }
      },
    }
  }

</script>

<style>

</style>