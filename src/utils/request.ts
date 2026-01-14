import axios from 'axios'
import { router } from '@/router'
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 60 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
})

// 请求拦截器
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {

    const token = localStorage.getItem('token')
    if (token) config.headers['Authorization'] = `Bearer ${token}`

    return config
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  },
)

// 响应拦截器
http.interceptors.response.use(
  (res: AxiosResponse) => {
    return Promise.resolve(res.data)
  },
  (err: AxiosError) => {
    const status = err.response?.status
    if (status === 401) {
      // 跳转登录页面
      router.push('/login')
    }
    return Promise.reject(err)
  },
)

export default http
