import axios from "./index"

export const getSeveralAlbums = (albums) => axios.get(`albums/?ids=${albums}`)