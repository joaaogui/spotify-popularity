<template>
  <v-app>
    <v-app-bar :value="showAppBar && this.$route.name === 'Songs'" app flat>
      <v-img
        @click="goHome"
        class="mr-2"
        contain
        max-height="50"
        max-width="75"
        src="images/logo.png"
        style="cursor: pointer"
        v-if="showAppBar"
      />
      <SearchArtist v-if="showAppBar" />
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
import { getToken } from "@/api/auth";
import SearchArtist from "@/components/SearchArtist.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  components: { SearchArtist },
  computed: {
    ...mapGetters(["showAppBar"]),
  },
  async created() {
    const token = await getToken();
    this.$store.commit("setToken", token.data.access_token);
  },
  methods: {
    ...mapMutations(["setInput"]),
    goHome() {
      this.setInput("");
      this.$router.push("/");
    },
  },
};
</script>
