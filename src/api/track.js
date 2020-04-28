import axios from "./index"

export const getTracks = (tracks) => axios.get(`tracks/?ids=${tracks}`)