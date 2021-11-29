<template>
  <div class="home">
    <!-- <pre>{{results}}</pre> -->
    <div class="home_container">
      <div class="home__hero container__small">
        <Hero />
      </div>
      <div class="home__BlogCard container__small">
        <template v-for="(blogs,blogsIndex) in Blogs.slice(0,3)">
          <BlogsCard :key="blogsIndex" :Blogscards="blogs"/>
        </template>
        <div class="button">
          <nuxt-link to="/all-blogs" class="button__learnMore">More Posts</nuxt-link>
        </div>
      </div>
      <div class="home__posts container__small">
        <Posts />
      </div>
    </div>
  </div>
</template>

<script>
import BlogsCard from '~/components/BlogsCard.vue'
import Button from '~/components/Button.vue'
import Hero from '~/components/Hero.vue'
import Posts from '~/components/Posts.vue'
export default {
  components: {
    Hero,
    BlogsCard,
    Posts,
    Button,
  },
  props: ['results'],
  
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

<style lang="scss" scoped>

</style>

