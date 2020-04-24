import axiosInstance from "axios"

const axios = axiosInstance.create({
  baseURL: process.env.VUE_APP_API_URL
})

axios.interceptors.response.use(function (response) {
  if (response.data.Error) {
    throw new Error(response.data.Error)
  } else {
    return response
  }
}, function (error) {
  return Promise.reject(error)
})

export default axios