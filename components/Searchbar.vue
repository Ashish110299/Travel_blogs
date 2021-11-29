<template>
  <div>
    <form action="" class="search" @submit.prevent="note()">
      <input 
        type="email"
        id="subscription"
        class="search__text" 
        placeholder="Vinay@business.com"
        v-model="Subscriber"
      >
      <input type="submit" value="Subscribe" class="search__submit" >
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        Subscriber: '',
        Subscribers: [],
      }
    },
    
    methods: {
      async note() {
        if(process.client){
          if(this.Subscriber.length > 1){
            this.Subscribers.push(this.Subscriber);
            var subs__string = JSON.stringify(this.Subscribers)
            localStorage.setItem('emails',subs__string)

            var subs = localStorage.getItem('emails')
            var subs__obj = JSON.parse(subs)
            console.log(subs__obj);
          } else if(this.Subscriber === null ){
            !this.Subscribers.push(this.Subscriber);
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>