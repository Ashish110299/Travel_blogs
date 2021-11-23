<template>
  <div>
    <form action="" class="search" @submit.prevent="note()">
      <input 
        type="email" 
        class="search__text" 
        placeholder="Vinay@business.com"
        v-model="Subscriber"
      >
      <input type="submit" value="Subscribe" class="search__submit">
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        Subscriber: '',
      }
    },

    methods: {
      async note() {
        if(this.Subscriber.length >= 3){
          alert("Thanku for showing your interest in us and In our blogs")
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>