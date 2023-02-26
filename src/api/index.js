import axiosInstance from "axios"
import store from "@/store/index"

const axios = axiosInstance.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {'Authorization': `Bearer ${store.state.token}`}
})

export default axios