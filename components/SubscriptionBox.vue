<template>
  <div class="subs"> 
    <div class="subs__content container__small">
      <h3 class="subs__content_heading">
        Subscribe and join thousands like you!
      </h3>
      <Searchbar
        ref="subscription"
      />
    </div>
  </div>
</template>

<script>
import Searchbar from './Searchbar.vue'
export default {
  components: { Searchbar },

}
</script>

<style>

</style>