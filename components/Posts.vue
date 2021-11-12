<template>
  <div class="postsBox">
    <h2 class="postsBox__heading">Latest posts</h2>
    <p class="postsBox__descr">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno
    </p>
    <div class="postsBox__cardsCont">
      <PostCards/>
      <PostCards/>
      <PostCards/>
    </div>
  </div>  
</template>

<script>
import PostCards from './PostCards.vue'
export default {
  components: {
    PostCards
  }
}
</script>

<style>

</style>