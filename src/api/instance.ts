import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'


export const instance = axios.create({
  baseURL: ['http://localhost:8001', 'http://todotestapi.zmsnlxx.cn', 'http://todoapi.zmsnlxx.cn'][process.env.BASE],
  timeout: 5000,
  withCredentials: true
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => Promise.reject(error),
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response?.status === 200) {
      return Promise.resolve(response.data)
    }
    return Promise.reject(response.data)
  },
  error => {
    if (error.response?.status) {
      switch (error.response.data.status) {
        case 404:
          console.error('网络请求不存在')
          break
        default:
          console.error(error.response.data.path, error.response.data.message)
      }
      return Promise.reject(error.response.data)
    }
  }
)
