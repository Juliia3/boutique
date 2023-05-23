import { createStore } from "vuex";
// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

export default new createStore({
  state: {
    posts: [],
  },

  actions: {
    fetchPosts(context, category) {
      console.log(category);
      const url = category
        ? "https://fakestoreapi.com/products/category/" +
          encodeURIComponent(category)
        : "https://fakestoreapi.com/products";
      return fetch(url)
        .then((res) => res.json())
        .then((json) => context.commit("SET_POSTS", json))
        .catch((err) => console.error(err));
    },
  },

  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
  },

  getters: {
    posts(state) {
      return state.posts;
    },
  },
});
