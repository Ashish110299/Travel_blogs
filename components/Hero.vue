<template>
  <div class="slider-serachResult">
    <div class="slider">
      <!-- <pre>{{searchResult.data}}</pre> -->
      <div class="slider__details">
        <div class="slider__details_Smheading">My Experience Blog</div>
        <div class="slider__details_heading">My travel Ideas</div>
        <div class="slider__details_descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, blanditiis delectus. Esse dolore quis maiores sequi facilis! Vel veritatis quibusdam, excepturi incidunt quisquam similique, ratione eveniet eius nihil accusantium non?
        </div>
        <div class="slider__indicatorCont">
          <span class="slider__indicator"></span>
          <span class="slider__indicator"></span>
          <span class="slider__indicator"></span>
          <span class="slider__indicator"></span>
        </div>
        <form action="" class="slider__detailsForm" @submit.prevent="searchBlogs()">
          <input 
            type="text" 
            class="slider__inputText" 
            placeholder="Search Blog.."
            v-model="SearhcInput"
          >
          <input 
            type="submit" 
            class="slider__inputSubmit"
          >
        </form>
      </div>
      <div class="slider__imgCont">
        <img src="~/assets/images/HeroImage.png" alt="" class="slider__image">
      </div>
    </div>
    <div class="BlogsCard slider__blogCard" v-show="SearhcInput !== ''" v-for="(posts, postsIndex) in searchResult.data" :key="postsIndex">
      <div class="BlogsCard__details">
        <h3 class="BlogsCard__details_heading" v-html="posts.title.rendered"></h3>
        <div>
          <p class="BlogsCard__details_descr" v-html="posts.content.rendered.slice(0,200)">
          </p>
        </div>
      </div>
      <nuxt-link :to="`/travel-blog/${posts.slug}`" class="BlogsCard__imaCont">
        <img :src="`${posts.x_featured_media_large}`" alt="" class="BlogsCard__img">
      </nuxt-link>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
import BlogsCard from './BlogsCard.vue'
  export default {
  components: { BlogsCard },
    data(){
      return{
        SearhcInput: '',
        searchResult: '',
      }
    },

    methods: {
      async searchBlogs($axios) {
        if(process.client){
          if (localStorage.getItem(`${this.SearhcInput}`) === null){
            let searchResult = await axios.get(`http://firstproject.test/wp-json/wp/v2/posts?search=${this.SearhcInput}`)
            let searchResult_searilized = JSON.stringify(searchResult);
            localStorage.setItem(`${this.SearhcInput}`, searchResult_searilized);
            var searchedResult = localStorage.getItem(`${this.SearhcInput}`)
            var searchResultObj = JSON.parse(searchedResult)
            this.searchResult = searchResultObj

          } else {
            var searchedResult = localStorage.getItem(`${this.SearhcInput}`)
            var searchResultObj = JSON.parse(searchedResult)
            this.searchResult = searchResultObj
          }
        }
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>