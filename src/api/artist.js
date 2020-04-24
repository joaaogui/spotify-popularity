import axios from "./index"

const getArtist = (artist) => axios.get(`search?q=${artist}&type=artist`)
const getAlbums = (artistId) => axios.get(`artists/${artistId}/albums?include_groups=single`)

export {
    getArtist,
    getAlbums
}
