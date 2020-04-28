import axios from "./index"

export const getAlbumTracks = (albumId) => axios.get(`albums/${albumId}/tracks?limit=50`)
export const getSeveralAlbums = (albums) => axios.get(`albums/?ids=${albums}`)