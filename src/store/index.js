import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    input: '',
    token: '',
    tracks: []
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setTracks(state, tracks) {
      state.tracks = tracks
    },
    setInput(state, input) {
      state.input = input
    }
  },
  getters: {
    showAppBar: state => {
      return !!state.input
    }
  },
  actions: {
  }
})
