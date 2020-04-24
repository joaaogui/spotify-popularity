import axios from "./index"

const getTitle = (title) => axios.get(`?t=${title}&apikey=${process.env.VUE_APP_API_KEY}`)

export {
  getTitle
}
