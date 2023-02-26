import axiosInstance from "axios"

const axios = axiosInstance.create({
    baseURL: import.meta.env.VITE_AUTH_URL,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})
console.log(import.meta.env.VITE_CLIENT_ID)

const getToken = () => axios.post(``, `grant_type=client_credentials&client_id=${import.meta.env.VITE_CLIENT_ID}&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`)

export {
    getToken
}