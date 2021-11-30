<template>
  <div class="">
    <h1 class="container__small allBlogs__heading2">BLOGS</h1>
    <div class="BlogsCard container__small" v-for="(singleBlog,singleBlogIndex) in Blogs" :key="singleBlogIndex">
      <!-- <pre>{{Blogs}}</pre> -->
      <div class="BlogsCard__details">
        <div class="BlogsCard__details_smHeading" v-html="singleBlog.x_categories"></div>
        <h3 class="BlogsCard__details_heading" v-html="singleBlog.title.rendered"></h3>
        <div>
          <p class="BlogsCard__details_descr" v-html="singleBlog.content.rendered.slice(0,200)">
          </p>
          <NuxtLink :to="`/travel-blog/${singleBlog.slug}`" class="BlogsCard__details_button">Read More</NuxtLink>
        </div>
      </div>
      <div class="BlogsCard__imaCont">
        <nuxt-link :to="`/travel-blog/${singleBlog.slug}`" >
          <img :src="`${singleBlog.x_featured_media_large}`" alt="" class="BlogsCard__img">
        </nuxt-link>
      </div>
    </div>
    <ul class="BlogsCard__pagenation container__small">
      <!-- <a href="" class="BlogsCard__pagenation-pageNo">1</a> -->
      <li class="BlogsCard__pagenation-list"><a href="" class="BlogsCard__pagenation-pageNo">&laquo;</a></li>
      <li class="BlogsCard__pagenation-list"><a href="" class="BlogsCard__pagenation-pageNo">1</a></li>
      <li class="BlogsCard__pagenation-list"><a href="" class="BlogsCard__pagenation-pageNo">2</a></li>
      <li class="BlogsCard__pagenation-list"><a href="" class="BlogsCard__pagenation-pageNo">3</a></li>
      <li class="BlogsCard__pagenation-list"><a href="" class="BlogsCard__pagenation-pageNo">4</a></li>
      <li class="BlogsCard__pagenation-list"><a href="" class="BlogsCard__pagenation-pageNo">&raquo;</a></li>
    </ul>
  </div>
</template>

<script>
export default {


  created() {
    if( !this.$store.state.wordPressBlog.length ) {
      this.$store.dispatch('wordpressApiBlogs');
    }
  },

  computed: {
    Blogs() {
      return this.$store.state.wordPressBlog;
    },
  },
}
</script>

<style>

</style>