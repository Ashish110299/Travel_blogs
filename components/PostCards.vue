<template>
  <div class="postCards" v-if="data">
    <nuxt-link :to="`/travel-blog/${data.slug}`" class="postCards__imgCont">
      <img :src="`${data.x_featured_media_large}`" alt="" class="postCards__image">
    </nuxt-link>
    <div class="postCards__details">
      <div class="postCards__author-Date">
        <div class="postCards__date"><img src="~/assets/images/dateCalendar.png" alt="" class="postCards__author-dateCal">{{data.date.slice(0,10)}}</div>
        <div class="postCards__authorName"> <img src="~/assets/images/writer.png" alt="">{{data.x_author}}</div>
      </div>
      <p class="postCards__paraGraph" v-html="data.title.rendered"></p>
      <nuxt-link :to="`/travel-blog/${data.slug}`" class="postCards__readMore" >Read More</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['data']
}
</script>

<style>

</style>