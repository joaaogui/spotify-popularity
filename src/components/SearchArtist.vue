<template>
    <v-text-field
        @keyup.enter="searchArtist"
        hide-details="auto"
        placeholder="Enter the Artist/Group name"
        v-model="artistName"
        :loading="loading"
        :error-messages="errorMessage"
    />
</template>

<script>
  import {mapState} from "vuex"

  export default {
    name: "SearchArtist",
    data: () => ({
      artistName: "",
      loading: false,
      errorMessage: ''
    }),
    mounted() {
      this.artistName = this.input
    },
    computed: {
      ...mapState([
        "input"
      ])
    },
    methods: {
      async searchArtist() {
        this.loading = true
        this.errorMessage = ""
        try {
          let utils = await import('@/utils')
          await utils.searchArtist(this.artistName)
          this.$router.push({name: "Songs", params: {artist: this.artistName}})
        } catch (e) {
          console.log(e)
          this.errorMessage = "Artist not found!"
        }
        this.loading = false
      }
    }
  }
</script>