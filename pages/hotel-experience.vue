<template>
  <div class="hotelExp">
    <div class="about__container container__small" v-if="Blogs != ''">
      <!-- <pre>{{BlogsCards}}</pre> -->
      <div class="about__descr">
        <h6 class="about__descr_ques"></h6>
        <p class="about__descr_answ" v-html="BlogsCards.content.rendered">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    if(process.client){
      if(localStorage.getItem(`hotelExp`) === null){
        var BlogsCards = await $axios.$get(
          `http://firstproject.test/wp-json/wp/v2/pages/161`
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
    }
  },
}
</script>

<style>

</style>