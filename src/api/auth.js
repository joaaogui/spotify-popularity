import axiosInstance from "axios"

const axios = axiosInstance.create({
    baseURL: process.env.VUE_APP_AUTH_URL,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

const getToken = () => axios.post('', `grant_type=client_credentials&client_id=${process.env.VUE_APP_CLIENT_ID}&client_secret=${process.env.VUE_APP_CLIENT_SECRET}`)

export {
    getToken
}