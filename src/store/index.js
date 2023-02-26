import { createStore } from 'vuex'

export default createStore({
  state: {
    input: '',
    token: '',
    tracks: [],
    loading: false
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
    },
    toggleLoading(state){
      state.loading = !state.loading
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
