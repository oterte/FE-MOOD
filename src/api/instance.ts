import axios, { AxiosInstance } from 'axios'
import {
  onDeletetHandler,
  onGetLocalStorage,
  onSetCookieHandler,
  onSetLocalStorageHandler,
} from '../util/cookie'

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: { Authorization: onGetLocalStorage('accessToken') },
  withCredentials: true,
})

const withoutTokenInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
})

const refreshInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
})

instance.interceptors.request.use(
  (config) => {
    const token = onGetLocalStorage('accessToken')
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

withoutTokenInstance.interceptors.request.use(
  (config) => {
    const token = onGetLocalStorage('accessToken')
    config.headers.Authorization = token ? `Bearer ${token}` : null
    return config
  },
  (error) => Promise.reject(error)
)
refreshInstance.interceptors.request.use(
  (config) => {
    const refresh = onGetLocalStorage('refresh')
    config.headers.Authorization = `Bearer ${refresh}`
    return config
  },
  (error) => Promise.reject(error)
)

export const expireToken = async () => {
  const res = await refreshInstance.post(`/api/user/refresh`)
  const data = res.data
  onSetLocalStorageHandler('accessToken', data.accessToken)
  onDeletetHandler()
  onSetCookieHandler('accessToken', data.accessToken)
}

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 419 || error.response.status === 401) {
      originalRequest._retry = true
      try {
        const res = await refreshInstance.post(`/api/user/refresh`)
        const data = res.data
        onSetLocalStorageHandler('accessToken', data.accessToken)
        return instance.request(originalRequest)
      } catch (error) {
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)

withoutTokenInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 419 || error.response.status === 401) {
      originalRequest._retry = true
      try {
        const res = await refreshInstance.post(`/api/user/refresh`)
        const data = res.data
        onSetLocalStorageHandler('accessToken', data.accessToken)
        return withoutTokenInstance.request(originalRequest)
      } catch (error) {
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)

export { instance, withoutTokenInstance }
