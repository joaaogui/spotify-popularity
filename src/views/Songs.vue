<template>
    <v-container fluid>
        <div :key="track.id" class="season"
             v-for="(track, index) in tracks">
            <span class="position">{{index + 1}}</span>
            <div class="ml-8" style="display: block">
                <div>{{ track.name }}</div>
                <div>{{ track.popularity }}</div>
            </div>
        </div>
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
  }
</script>

<style lang="scss" scoped>
    .season {
        border: 2px solid gray;
        border-radius: 10px;
        margin: 5px;
        padding: 5px;
        display: flex;
    }

    .best-season {
        border: 2px solid gold;
    }

    .position {
        font-size: 28px;
    }
</style>