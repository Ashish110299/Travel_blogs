async asyncData({params, $axios}){
  const blogdetail = params.slug
  console.log(blogdetail)
  var singleBlog = await $axios.$get(
    `http://firstproject.test/wp-json/wp/v2/posts?slug=${blogdetail}`
  )

  singleBlog = (singleBlog.length > 0) ? singleBlog[0] : {}

  return { singleBlog }
},