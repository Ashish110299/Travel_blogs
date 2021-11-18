<template>
  <div class="home">
    <!-- <pre>{{results}}</pre> -->
    <div class="home_container">
      <div class="home__hero container__small">
        <Hero />
      </div>
      <div class="home__BlogCard container__small">
        <template v-for="(blogs,blogsIndex) in Blogs">
          <BlogsCard :key="blogsIndex" :Blogscards="blogs" />
        </template>
      </div>
      <div class="home__button container__small">
        <!-- <Button /> -->
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

