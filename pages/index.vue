<template>
    <div class="home">
      <div class="home_container">
        <div class="home__hero container__small">
          <pre>{{travelBlogs}}</pre>
          <Hero/>
        </div>
        <div class="home__BlogCard container__small ">
          <BlogsCard/>
          <BlogsCard/>
          <BlogsCard/>
        </div>
        <div class="home__button container__small">
          <Button/>
        </div>
        <div class="home__posts container__small">
          <Posts/>
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

  data (){
    return{
      travelBlogs: [],
    }
  },
  
  async fetch() {
    this.travelBlogs = await fetch(
      'http://firstproject.test/wp-json/wp/v2/posts/73' 
    ).then(res => res.json());
    console.log(wordPresAPI);
  }
  
}

</script>

<style lang="scss" scoped>

</style>>

