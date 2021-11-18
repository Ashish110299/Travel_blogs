<template>
  <div class="about container" v-if="singleBlog !== ''">
    <Aboutheader
      :aboutheader="singleBlog"
    />
    <About
      :about="singleBlog"
    />
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

    async asyncData({params, $axios}){
      if(process.client){
        if(localStorage.getItem(`Id_${params.id}`) === null){
          const blogdetail = params.id
          var singleBlog = await $axios.$get(
            `http://firstproject.test/wp-json/wp/v2/posts/${blogdetail} `
          )
          var singleBlog__serialized =  JSON.stringify(singleBlog);
          localStorage.setItem(`Id_${params.id}`,singleBlog__serialized);
        }
        else{
          var reusltById = localStorage.getItem(`Id_${params.id}`)
          var singleBlog = JSON.parse(reusltById)
        }
        return{
          singleBlog
        }
      }
    },
  }

</script>

<style lang="scss" scoped>

</style>  