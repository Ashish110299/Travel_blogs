<template>
  <div class="hotelExp">
    <div class="about__container container__small" v-if="wildLife">
      <div class="about__descr">
        <h6 class="about__descr_ques"></h6>
        <p class="about__descr_answ" v-html="wildLife.content.rendered">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  async asyncData({$axios}) {
    if(process.client){
      if(localStorage.getItem(`wildLife`) === null){
        var wildLife = await $axios.$get(
          `http://firstproject.test/wp-json/wp/v2/pages/167`
        )
        let wildLife__serialized =  JSON.stringify(wildLife);
        localStorage.setItem(`wildLife`,wildLife__serialized);
      }
  
      else{
        let reusltById = localStorage.getItem(`wildLife`)
        var wildLife = JSON.parse(reusltById)
        }
  
      return{
        wildLife
      }
    }
  },
}
</script>

<style>

</style>