import { instance } from './instance'
import { Method } from 'axios'
import { Toast } from 'vant'
import { removeToken } from '@/utils/token'

export type Api<P = null, D = null> = (params?: P) => Promise<D>

export function generateApi<Params = null, Data = null>(path: string, method?: Method | 'get'): Api<Params, Data> {
  let throttled: boolean = false

  return async function (params?: Params) {
    let res: any, data

    if (method === 'post') {
      if (throttled) {
        Toast('请勿频繁操作')
        return Promise.reject()
      } else {
        throttled = true
      }

      try {
        res = await instance.request({ url: path, method, data: filterParams(params) })
      } catch (e) {
        return Promise.reject(e)
      } finally {
        setTimeout(() => throttled = false, 2000)
      }
    } else {
      res = await instance.request({ url: path, method, params: filterParams(params) })
    }

    if (res.status === 200) {
      data = res.data
    } else {
      if (res.status === 501) {
        removeToken()
        await router.push({ name: 'Login' })
        return Promise.resolve(null)
      }
      Toast.fail({ message: res.data, icon: 'warning' })
      return Promise.reject(res)
    }

    return data
  }
}

function filterParams (params: any) {
  if (!params) return

  let filteredParams: any

  if (Array.isArray(params)) {
    filteredParams = params
  } else {
    filteredParams = {}

    Object.keys(params).forEach(key => {
      const val = params[key]

      if (typeof val === 'number' || typeof val === 'boolean') {
        filteredParams[key] = val
      }

      if (typeof val === 'string') {
        filteredParams[key] = val
      }

      if (val) {
        if (Array.isArray(val) && val.length === 0) {
          return
        }
        filteredParams[key] = val
      }
    })
  }

  return filteredParams
}
