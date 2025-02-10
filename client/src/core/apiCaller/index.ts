import axios from "axios"
import getCookie from "@/utils/getCookie"

const apiCaller = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
})

apiCaller.interceptors.request.use((config) => {
  config.headers["username"] = getCookie("username")
  return config
})

export default apiCaller
