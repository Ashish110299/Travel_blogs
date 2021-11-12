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
      <nuxt-link to="/">
        <img src="~/assets/images/menu.png" alt="" class="topMenu__mobileMenu-image" onclick="myFunction()">
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  
 function myFunction() {
  var x = document.getElementById("topMenu__mobileMenu__tabsCont");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

 
</script>

<style>

</style>