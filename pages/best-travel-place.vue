<template>
  <div class="hotelExp">
    <div class="about__container container__small" v-if="Blogs != ''">
      <!-- <pre>{{BlogsCards}}</pre> -->
      <div class="about__descr">
        <h6 class="about__descr_ques"></h6>
        <p class="about__descr_answ" v-html="besPlaces.content.rendered">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    if(localStorage.getItem(`besPlaces`) === null){
      var besPlaces = await $axios.$get(
        `http://firstproject.test/wp-json/wp/v2/pages/163`
      )
      let besPlaces__serialized =  JSON.stringify(besPlaces);
      localStorage.setItem(`besPlaces`,besPlaces__serialized);
    }

    else{
      let reusltById = localStorage.getItem(`besPlaces`)
      var besPlaces = JSON.parse(reusltById)
      }
      
    return{
      besPlaces
    }
  },
}
</script>

<style>

</style>