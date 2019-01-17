<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="300" height="300">
    <Spotify msg="Digite o nome do artista/grupo"/>
  </div>
</template>

<script>
import Spotify from './components/Spotify.vue'

export default {
  name: 'app',
  components: {
    Spotify
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
