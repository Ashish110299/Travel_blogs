export const state = () => ({
  wordPressBlog: [],
})

export const actions = {
  async wordpressApiBlogs({ commit }) {
    if(localStorage.getItem("travelBlogs") === null){
      const response = await this.$axios.$get('http://firstproject.test/wp-json/wp/v2/posts?_embed');
      var content = response;
      let content_searialized = JSON.stringify(content);
      localStorage.setItem("travelBlogs", content_searialized);
    }

    else{
      let blogs = localStorage.getItem("travelBlogs")
      var content = JSON.parse(blogs);
    }
    commit("storeWordpressBlogs", content);
  },
}

export const mutations = {
  storeWordpressBlogs(state,content){
    state.wordPressBlog = content
  },
};