<template>
  <div class="hotelExp">
    <div class="about__container container__small" v-if="Blogs != ''">
      <!-- <pre>{{BlogsCards}}</pre> -->
      <div class="about__descr">
        <h6 class="about__descr_ques"></h6>
        <!-- <pre>{{bestFood}}</pre> -->
        <p class="about__descr_answ" v-html="bestFood.content.rendered">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
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
</script>

<style>

</style>