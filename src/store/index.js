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
    },
    updateRequestState(state, payload) {
      const index = state.requests.findIndex((el) => el.id === payload.id)
      if (index !== -1) {
        state.requests[index].state = payload.newState
      }
    },
    clearRequests(state) {
      state.requests = []
    }
  },
  actions: {

  },
})
