<template>
    <v-app>
        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
  import {getToken} from "@/api/auth";

  export default {
    name: 'App',
    async created() {
      const token = await getToken()
      this.$store.commit('setToken', token.data.access_token)
    }
  };
</script>
