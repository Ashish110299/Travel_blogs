<template>
  <div>
    <div class="about__container container__small" v-if="about">
      <!-- <pre>{{about}}</pre> -->
      <div class="about__descr">
        <h6 class="about__descr_ques"></h6>
        <p class="about__descr_answ" v-html="about.content.rendered">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['about']
}
</script>

<style>

</style>