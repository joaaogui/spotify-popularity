import axios from "./index"

const getAlbumTracks = (albumId) => axios.get(`albums/${albumId}/tracks`)

export {
  getAlbumTracks
}