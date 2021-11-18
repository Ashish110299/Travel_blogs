export const state = () => ({
  wordPressBlog: [],
  blogs:[],
})

export const actions = {
  async wordpressApiBlogs({ commit }) {
    if(localStorage.getItem("blogs") === null){
      const response = await this.$axios.$get('http://firstproject.test/wp-json/wp/v2/pages/');
      var content = response;
      let content_searialized = JSON.stringify(content);
      localStorage.setItem("blogs", content_searialized);
    }
    else{
      let blogs = localStorage.getItem("blogs")
      var content = JSON.parse(blogs)
      console.log(content);
    }
    commit("storeWordpressBlogs", content);
  }, 
}

export const mutations = {
  storeWordpressBlogs(state,content){
    state.wordPressBlog = content
  },
};    