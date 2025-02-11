import getCookie from "@/utils/getCookie"
import axios from "axios"

const apiCaller = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT || "http://localhost:3001/",
})

apiCaller.interceptors.request.use((config) => {
  config.headers["username"] = getCookie("username")
  return config
})

export default apiCaller
