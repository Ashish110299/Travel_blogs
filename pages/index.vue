<template>
    <div class="home">
      <div class="home_container">
        <div class="home__hero container__small">
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
    <!-- <div class="home container">
      <div class="home_container container__small">
        <div class="home__hero">
          <Hero/>
        </div>
        <div class="home__BlogCard">
          <BlogsCard/>
          <BlogsCard/>
          <BlogsCard/>
        </div>
        <div class="home__button">
          <Button/>
        </div>
        <div class="home__posts">
          <Posts/>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import BlogsCard from '~/components/BlogsCard.vue'
import Button from '~/components/Button.vue'
import Footer from '~/components/Footer.vue'
import Hero from '~/components/Hero.vue'
import MenuBar from '~/components/MenuBar.vue'
import Posts from '~/components/Posts.vue'
import SubscriptionBox from '~/components/SubscriptionBox.vue'
export default {
  components: {
    Hero,
    BlogsCard,
    Posts,
    SubscriptionBox,
    Footer,
    Button,
    MenuBar,
  }
}

</script>

<style lang="scss" scoped>

</style>>

