import axiosInstance from "axios"
import store from "@/store/index"

const axios = axiosInstance.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {'Authorization': `Bearer ${store.state.token}`}
})

export default axios