<template>
    <v-text-field
        @keyup.enter="searchArtist($event)"
        hide-details="auto"
        placeholder="Enter the Artist/Group name"
        :loading="loading"
        v-model="artistName"
        :error-messages="errorMessage"
    />
</template>

<script>
  import {mapState} from "vuex"

  export default {
    name: "SearchArtist",
    data: () => ({
      artistName: "",
      errorMessage: ''
    }),
    computed: {
      ...mapState([
        "input",
        "loading"
      ])
    },
    created() {
      this.artistName = this.input
    },
    methods: {
      async searchArtist(event) {
        this.artistName = event.target.value
        this.$store.commit('toggleLoading')
        this.errorMessage = ""
        try {
          let utils = await import('@/utils')
          await utils.searchArtist(this.artistName)
          this.$router.push({name: "Songs", params: {artist: this.artistName}})
        } catch (e) {
          console.log(e)
          this.errorMessage = "Artist not found!"
        }
        this.$store.commit('toggleLoading')
      }
    }
  }
</script>