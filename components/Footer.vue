<template>
  <div class="footer container__small">
    <div class="footer__contacts">
      <h5 class="footer__contacts_heading">CONTACTS</h5>
      <address class="footer__contacts_address">
        25 Ratna Park,<br>
        Don Bausch Road, India
      </address>
      <div  class="footer__contacts_tel">
        <strong><span><img src="" alt=""></span><a href="tel:9080000000" target="_blank">9080000000</a></strong>
      </div>
      <a href="mailto: info@myblog.com" class="footer__contacts_email" >info@myblog.com</a>
    </div>
    <div class="footer__popular">
      <h5 class="footer__contacts_heading">Popular</h5>
      <div class="footer__popular_itemsCont">
        <nuxt-link to="/" class="footer__popular_item">Free Travel videos</nuxt-link>
        <nuxt-link to="/" class="footer__popular_item">Maps</nuxt-link>
        <nuxt-link to="/" class="footer__popular_item">Hotel contact book</nuxt-link>
      </div>
    </div>
    <div class="footer__socialButton">
      <a href="mailto: info@myblog.com" class="footer__socialButton_contactus" target="_blank">Contact Us</a>
      <!-- <nuxt-link  to="/" class="footer__socialButton_contactus">Contact Us</nuxt-link> -->
      <div class="footer__socialButton__social">
        <h5 class="footer__socialButton__social-heading">Follow us</h5>
        <nuxt-link to="/" class="footer__socialButton-item1">
          <img src="~/assets/images/facebook.png" alt="" class="footer__socialButton__social-image">
        </nuxt-link>
        <nuxt-link to="/" class="footer__socialButton-item1">
          <img src="~/assets/images/instagram.png" alt="" class="footer__socialButton__social-image">
        </nuxt-link>
        <nuxt-link to="/" class="footer__socialButton-item1">
          <img src="~/assets/images/whatsapp.png" alt="" class="footer__socialButton__social-image">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>