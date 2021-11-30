<template>
  <div>
    <div class="BlogsCard">
      <!-- <pre>{{Blogscards}}</pre> -->
      <div class="BlogsCard__details">
        <div class="BlogsCard__details_smHeading" v-html="Blogscards.x_categories"></div>
        <h3 class="BlogsCard__details_heading" v-html="Blogscards.title.rendered"></h3>
        <div>
          <p class="BlogsCard__details_descr" v-html="Blogscards.content.rendered.slice(0,200)">
          </p>
          <NuxtLink :to="`/travel-blog/${Blogscards.slug}`" class="BlogsCard__details_button">Read More</NuxtLink>     
        </div>
      </div>
      <nuxt-link :to="`/travel-blog/${Blogscards.slug}`" class="BlogsCard__imaCont">
        <img :src="`${Blogscards.x_featured_media_large}`" alt="" class="BlogsCard__img">
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['Blogscards']
}
</script>

<style>

</style>