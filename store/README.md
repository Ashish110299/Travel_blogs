 async asyncData({params, $axios}){
  if(process.client){
    if(localStorage.getItem(`Id_${params.slug}`) === null){
      const blogdetail = params.slug
      var singleBlog = await $axios.$get(
        `http://firstproject.test/wp-json/wp/v2/posts?slug=${blogdetail}`
      )
      var sigleBlog1 = singleBlog[0]
      var singleBlog__serialized =  JSON.stringify(sigleBlog1);
      localStorage.setItem(`Id_${params.slug}`,singleBlog__serialized);
      var reusltById = localStorage.getItem(`Id_${params.slug}`)
      var singleBlog = JSON.parse(reusltById)
    }
    else{
      var reusltById = localStorage.getItem(`Id_${params.slug}`)
      var singleBlog = JSON.parse(reusltById)
    }
    return{
      singleBlog
    }
  }
},