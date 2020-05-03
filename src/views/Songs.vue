<template>
    <v-container>
        <v-row align="center" v-for="(track, index) in tracks" :key="track.id" no-gutters class="pt-2">
            <v-col cols="1" class="text-center display-1 font-weight-thin">{{index + 1}}</v-col>
            <v-col cols="1" class="hidden-sm-and-down">
                <v-img :src="track.album.images[0].url"></v-img>
            </v-col>
            <v-col class="pl-4" cols="9">
                <div class="title font-weight-regular">{{ track.name }}</div>
                <div class="subtitle font-weight-light">{{ track.album.name }}</div>
                <div class="subtitle font-weight-light">{{ track.album.release_date.substring(0,4) }}</div>
            </v-col>
            <v-col cols="1" class="text-center display-1 font-weight-thin">{{ track.popularity }}</v-col>
        </v-row>
    </v-container>
</template>

<script>
  import {mapState} from "vuex";


  export default {
    name: "Songs",
    computed: {
      ...mapState([
        "input",
        "tracks",
      ])
    },
    async mounted() {
      if (!this.input && this.$route.params.artist) {
        this.$store.commit('setInput', this.$route.params.artist)
        this.$store.commit('toggleLoading')
        let utils = await import('@/utils')
        await utils.searchArtist(this.$route.params.artist)
        this.$store.commit('toggleLoading')
      }
    }
  }
</script>

<style lang="scss" scoped>
    .position {
        font-size: 28px;
    }
</style>