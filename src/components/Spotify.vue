<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>E descubra as músicas mais populares dele.</p>
        <input v-model="artistName" @keyup.enter="search" placeholder="Ex: Drake">
        <button type="submit" class="dropdown-item text-left" v-on:click="search">GO</button>
        <div v-if="found">
            <div v-for="(track, index) in ranking">
                <p class="best-music" v-if="index === 0 ">{{ track[0] }} {{ track[1] }}</p>
                <p v-else>{{ track[0] }} {{ track[1] }}</p>
                <p></p>
            </div>
        </div>
        <div v-else>
            <p> Artista não encontrado </p>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';

    export default {

        name: 'Spotify',
        props: {
            msg: String
        },
        data: function () {
            return {
                artistName: "",
                found: true,
                tracks: {},
            }
        },
        computed: {
            ranking: function () {
                // console.log(this.tracks)
                // console.log(this.ranking)

                var sortedTracks = [];
                for (var track in this.tracks) {
                    sortedTracks.push([track, this.tracks[track]]);
                }

                sortedTracks.sort(function (a, b) {
                    return b[1] - a[1];
                });

                return sortedTracks
            }
        },
        methods: {
            search: function () {
                var albumdict = {}
                let artistUrl = `https://api.spotify.com/v1/search?q=${this.artistName}&type=artist`
                var token = 'Bearer BQCTK7x7mb-G-yGYJiBBpnOF_82W2PQhqKVhYE3Pp0FktsKWb_CD5uFL4GwAyVqg5PSa-C_X-a-obF8qUnzvmy32_fSsWw9nCKASwCQZno1ZdNtQyxaRq-JPUVRN3ecH80D8UQTlhzyijiAC0LvWuA41iA'
                // console.log(artistUrl)
                var refresh_token = "AQBx4r7v_KmVkN6PZGQgLhEbuwWAIvtK9JVoPdUJC8nH_B2bATDNCyhBzKGHgwxxFdpFOJjZpZMQUm-tXVmfNIOa8t93RCTPGqbApZqtAwr-LVZ8mqLvofkn3zdqrSwUQkcFeQ"
                axios.get(artistUrl, {
                    headers: {
                        'Authorization': token,
                        // 'refresh_token': refresh_token
                    }
                }).then(response => {
                    var artistId = response.data.artists.items[0].id;

                    let url = `https://api.spotify.com/v1/artists/${artistId}/albums`
                    axios.get(url, {
                        headers: {
                            'Authorization': token
                        }
                    }).then(response => {
                            let albums = response.data.items;
                            for (const album of albums) {
                                // album.id
                                let url = `https://api.spotify.com/v1/albums/${album.id}/tracks`
                                axios
                                    .get(url, {
                                        headers: {
                                            'Authorization': token
                                        }
                                    })
                                    .then(response => {
                                            let tracks = response.data.items
                                            for (const track of tracks) {
                                                let url = `https://api.spotify.com/v1/tracks/${track.id}/`
                                                axios.get(url, {
                                                    headers: {
                                                        'Authorization': token
                                                    }
                                                })
                                                    .then(response => {
                                                        let name = response.data.name
                                                        let popularity = response.data.popularity
                                                        albumdict[name] = popularity
                                                        // console.log("chama")
                                                        this.tracks = "Season: " + name + " Nota: " + popularity
                                                        this.tracks = albumdict
                                                    })
                                            }
                                        }
                                    )
                            }
                        }
                    )
                        .catch(error => {
                            // Artista nao achado / Erro no token
                            console.log(error)
                        })
                })
            }
        }
    }
</script>

<style scoped>
    .best-music {
        font-weight: bold;
    }
</style>
