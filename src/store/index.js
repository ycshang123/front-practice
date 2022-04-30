import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser: {},
    loginStatus: false
  },
  getters: {},
  mutations: {
    login(state, payload) {
      state.loginUser = payload
    },
    setStatus(state, payload) {
      state.loginStatus = payload
    }
  },
  actions: {},
  modules: {}
})
