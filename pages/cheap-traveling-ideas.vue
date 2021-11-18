<template>
  <div class="hotelExp">
    <div class="about__container container__small" v-if="Blogs != ''">
      <!-- <pre>{{cheapTravel}}</pre> -->
      <div class="about__descr">
        <h6 class="about__descr_ques"></h6>
        <p class="about__descr_answ" v-html="cheapTravel.content.rendered">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    if(localStorage.getItem(`cheapTravel`) === null){
      var cheapTravel = await $axios.$get(
        `http://firstproject.test/wp-json/wp/v2/pages/165`
      )
      let cheapTravel__serialized =  JSON.stringify(cheapTravel);
      localStorage.setItem(`cheapTravel`,cheapTravel__serialized);
    }

    else{
      let reusltById = localStorage.getItem(`cheapTravel`)
      var cheapTravel = JSON.parse(reusltById)
      }
      
    return{
      cheapTravel
    }
  },
}
</script>

<style>

</style>