<template>
  <div class="BlogsCard">
    <div class="BlogsCard__details">
      <div class="BlogsCard__details_smHeading">category tag</div>
      <h3 class="BlogsCard__details_heading">Meeting new faces</h3>
      <p class="BlogsCard__details_descr">
        Later, when I would meet Binna and learn about his Port Douglas, I’d think back to these modern and contemporary canvases.
        <!-- <a class="BlogsCard__details_button" href="#">Read More</a> -->
        <NuxtLink to="/travel-blog" class="BlogsCard__details_button">Read More</NuxtLink>
      </p>  
    </div>
    <div class="BlogsCard__imaCont">
      <img src="~/assets/images/BlogCard.png" alt="" class="BlogsCard__img">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>