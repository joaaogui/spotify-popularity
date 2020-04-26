import axios from "./index"

const getTracks = (tracks) => axios.get(`tracks/?ids=${tracks}`)

export {
    getTracks
}