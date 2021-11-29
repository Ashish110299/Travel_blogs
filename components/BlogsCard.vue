<template>
  <div>
    <div class="BlogsCard">
      <!-- <pre>{{Blogscards}}</pre> -->
      <div class="BlogsCard__details">
        <!-- {{serchedItem}} -->
        <div class="BlogsCard__details_smHeading" v-html="Blogscards.x_categories"></div>
        <h3 class="BlogsCard__details_heading" v-html="Blogscards.title.rendered"></h3>
        <div>
          <p class="BlogsCard__details_descr" v-html="Blogscards.content.rendered.slice(0,200)">
          </p>
          <NuxtLink :to="`/travel-blog/${Blogscards.slug}`" class="BlogsCard__details_button">Read More</NuxtLink>     
        </div>
      </div>
      <div class="BlogsCard__imaCont">
        <nuxt-link :to="`/travel-blog/${Blogscards.slug}`" class="BlogsCard__img">
          <img :src="`${Blogscards.x_featured_media_large}`" alt="" >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['Blogscards','searchResult','serchedItem']
}
</script>

<style>

</style>