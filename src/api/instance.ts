import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'


export const instance = axios.create({
  baseURL: ['http://192.168.0.122:8001', 'http://todotest.zmsnlxx.cn', 'http://to.zmsnlxx.cn'][process.env.BASE],
  timeout: 5000,
  withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use(
  // 发送请求之前做些什么
  (config: AxiosRequestConfig) => {
    return config
  },
  // 对请求错误做些什么
  (error: any) => Promise.reject(error),
)

instance.interceptors.response.use(
  // 对响应数据做点什么
  (response: AxiosResponse) => {
    if (response?.status === 200) {
      return Promise.resolve(response.data)
    }
    return Promise.reject(response.data)
  },
  // 对响应错误做点什么
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
