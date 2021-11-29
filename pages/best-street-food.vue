<template>
  <div class="hotelExp">
    <div class="about__container container__small" v-if="bestFood">
      <!-- <pre>{{bestFood.title.rendered}}</pre> -->
      <h1 class="about__title">{{bestFood.title.rendered}}</h1>
      <div class="about__descr">
        <h6 class="about__descr_ques"></h6>
        <p class="about__descr_answ" v-html="bestFood.content.rendered">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    if(process.client){
      if(localStorage.getItem(`bestFood`) === null){
        var bestFood = await $axios.$get(
          `http://firstproject.test/wp-json/wp/v2/pages/169`
        );
        console.log(bestFood);
        let bestFood__serialized =  JSON.stringify(bestFood);
        localStorage.setItem(`bestFood`,bestFood__serialized);
        var reusltById = localStorage.getItem(`bestFood`)
        var bestFood = JSON.parse(reusltById)
      }
      else{ 
        var reusltById = localStorage.getItem(`bestFood`)
        var bestFood = JSON.parse(reusltById)
      }
        
      return{
        bestFood
      }

    }
  }
}
</script>

<style>

</style>