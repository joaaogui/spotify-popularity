import axios from "./index"

const getArtist = (artist) => axios.get(`search?q=${artist}&type=artist`)
const getAlbums = (artistId, offset) => axios.get(`artists/${artistId}/albums?offset=${offset}&limit=50&include_groups=album,single`)

export {
    getArtist,
    getAlbums
}
