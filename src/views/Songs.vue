<template>
    <div>
        <div v-for="track in tracks" :key="track.id">
            <div>{{track.name}}</div>
            <div>{{track.popularity}}</div>
        </div>
    </div>
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

<style scoped>

</style>