import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requests: []
  },
  getters: {
    illRequests(state) {
      return state.requests.filter((el) => el.state === 'ill')
    },
    healthyRequests(state) {
      return state.requests.filter((el) => el.state === 'healthy')
    }
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload)
      state.requests.sort((a, b) => b.creationDate - a.creationDate)
    }
  },
  actions: {

  },
})
