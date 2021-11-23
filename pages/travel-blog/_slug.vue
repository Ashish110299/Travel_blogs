<template>
  <div>
    <div class="about container" v-if="singleBlog">
      <!-- <pre>{{singleBlog}}</pre> -->
      <Aboutheader
        v-if="singleBlog"
        :aboutheader="singleBlog"
      />
      <About
        v-if="singleBlog"
        :about="singleBlog"
      />
    </div>
  </div>
</template>

<script>
import Aboutheader from '~/components/Aboutheader.vue'
import About from '~/components/About.vue'

  export default {
    components: { 
      Aboutheader,
      About,
    },

    data(){
      return{
        singleBlog: '',
      }
    },

    // async asyncData({params, $axios}){
    //   if(process.client){
    //     if(document.getElementById(`${params.slug}` === null)){
    //       const blogdetail = params.slug
    //       console.log('helo')
    //       var singleBlog = await $axios.$get(
    //         `http://firstproject.test/wp-json/wp/v2/posts?slug=${blogdetail}`
    //       )
    //       console.log(singleBlog);
    //       var singleBlog__string = JSON.stringify(singleBlog);
    //       localStorage.setItem(`${params.slug}`,singleBlog__string)
    //     } else {
    //       var localStore = localStorage.getItem(`${params.slug}`);
    //       var localStore__json = JSON.parse(localStore);
    //       var singleBlog = localStore__json;
    //     }
    //     return {
    //       singleBlog
    //     }
    //   }
    // },

    async asyncData({params, $axios}){
      if(process.client){
        const blogdetail = params.slug
        console.log(blogdetail)
        var singleBlog = await $axios.$get(
          `http://firstproject.test/wp-json/wp/v2/posts?slug=${blogdetail}`
        )

        singleBlog = (singleBlog.length > 0) ? singleBlog[0] : {}

        return { singleBlog }

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>  