import axios from "./index"

const getTrack = (trackId) => axios.get(`tracks/${trackId}/`)

export {
    getTrack
}