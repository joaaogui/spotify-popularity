import axiosInstance from "axios"
import store from "@/store/index"

console.log(store.state.token)
console.log("CHAMA")
const axios = axiosInstance.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {'Authorization': `Bearer ${store.state.token}`}
})

// axios.interceptors.response.use(function (response) {
//   if (response.data.Error) {
//     throw new Error(response.data.Error)
//   } else {
//     return response
//   }
// }, function (error) {
//   return Promise.reject(error)
// })

export default axios