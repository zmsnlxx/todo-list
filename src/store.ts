import Vue from 'vue'
import Vuex from 'vuex'
import { State } from '../types/global'
import _ from 'lodash'
Vue.use(Vuex)

const store = new Vuex.Store<State>({
  state: {
    user: null,
  },
  mutations: {
    SET_USER: (state, payload) => (state.user = payload),
    MERGE_USER: (state, payload) => (_.merge(state.user, payload)),
  },
  actions: {
    setUser: (injectee, payload) => injectee.commit('SET_USER', payload),
    mergeUser: (injectee, payload) => injectee.commit('MERGE_USER', payload),
  },
  getters: {
    user (state): User.Info | null { return state.user },
  },
})
window.store = store
export default store
