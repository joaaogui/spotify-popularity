import axios from "./index"

const getAlbumTracks = (albumId) => axios.get(`albums/${albumId}/tracks?limit=50`)

export {
  getAlbumTracks
}