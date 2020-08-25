import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER: (state, payload) => (state.user = payload),
  },
  actions: {
    setUser: (injectee, payload) => injectee.commit('SET_USER', payload),
  },
});
window.store = store
export default store
