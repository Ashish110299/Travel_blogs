<template>
  <div class="postsBox container__small allBlogs">
    <h2 class="allBlogs__heading">Blog Posts</h2>
    <div class="postsBox__cardsCont">
      <template v-for="(post, postIndex) in Blogs">
        <PostCards :key="postIndex" :data="post" />
      </template>
    </div>
  </div>  
</template>

<script>
import PostCards from '../components/PostCards.vue'
export default {
  components: {
    PostCards
  },
  
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