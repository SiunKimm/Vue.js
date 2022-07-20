// store/index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // ...
});

const store = {
  state: {
    title: null
  },
  getters: {
    getTitle: (state) => {
      return state.title
    }
  },
  mutations: {
    setTitle: (state, payload) => {
      state.title = payload
    }
  },
  actions: {
    setTitle: (context, payload) => {
      context.commit('setTitle', payload)
    }
  }
}

export default store
