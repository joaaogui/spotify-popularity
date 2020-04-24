import axiosInstance from "axios"

console.log(localStorage.getItem('token'))
const axios = axiosInstance.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {'Authorization': `Bearer ${localStorage.getItem('token')} adasdasd`}
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