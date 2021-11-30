<template>
  <div class="BlogsCard__food">
    <div class="BlogsCard container__small" v-for="(categories,CategoryIndex) in category" :key="CategoryIndex">
      <!-- <pre>{{categories}}</pre> -->
      <div class="BlogsCard__details">
        <div class="BlogsCard__details_smHeading" v-html="categories.x_categories"></div>
        <h3 class="BlogsCard__details_heading" v-html="categories.title.rendered"></h3>
        <div>
          <p class="BlogsCard__details_descr" v-html="categories.content.rendered.slice(0,200)">
          </p>
          <NuxtLink :to="`/travel-blog/${categories.slug}`" class="BlogsCard__details_button">Read More</NuxtLink>     
        </div>
      </div>
      <nuxt-link :to="`/travel-blog/${categories.slug}`" class="BlogsCard__imaCont">
        <img :src="`${categories.x_featured_media_large}`" alt="" class="BlogsCard__img">
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

  async asyncData({$axios}) {
    if(process.client){
      if(localStorage.getItem(`category`) === null){
        var category = await $axios.$get(
          `http://firstproject.test/wp-json/wp/v2/posts?categories=18`
        );
        let category__serialized =  JSON.stringify(category);
        localStorage.setItem(`category`,category__serialized);
        var reusltById = localStorage.getItem(`category`)
        var category = JSON.parse(reusltById)
      }
      else{
        var reusltById = localStorage.getItem(`category`)
        var category = JSON.parse(reusltById)
      }
      return{
        category
      }
    }
  }
}
</script>

<style>

</style>