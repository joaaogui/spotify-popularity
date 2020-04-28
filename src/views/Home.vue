<template>
    <v-container fluid class="fill-height">
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                class="text-center"
                cols="12"
                md="4"
                sm="8"
            >
                <v-img src="../assets/logo.png"/>
                <SearchArtist/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

  import SearchArtist from "@/components/SearchArtist";

  export default {
    name: 'Home',
    components: {
      SearchArtist,
    },
  }
</script>
