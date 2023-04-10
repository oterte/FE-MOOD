import axios, { AxiosInstance } from 'axios'
import { onDeletetHandler, onSetCookieHandler, onSetLocalStorageHandler } from '../util/cookie'
import { async } from 'q'

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: { Authorization: localStorage.getItem('authorization') },
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
    const token = localStorage.getItem('authorization')
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)
refreshInstance.interceptors.request.use(
  (config) => {
    const refresh = localStorage.getItem('refresh')
    config.headers.Authorization = `Bearer ${refresh}`
    return config
  },
  (error) => Promise.reject(error)
)
//Axios의 인터셉터를 사용하여,
//419 응답을 받았을 때 refresh token을 사용하여
//새로운 access token을 가져오도록 설정
export const expireToken = async () => {
  const res = await refreshInstance.post(`/api/user/refresh`)
  const data = res.data
  console.log(data.accessToken)
  onSetLocalStorageHandler('authorization', data.accessToken)
  onDeletetHandler('authorization')
  onSetCookieHandler('authorization', data.accessToken)
}

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 419) {
      originalRequest._retry = true
      try {
        const res = await refreshInstance.post(`/api/user/refresh`)
        const data = res.data
        onSetLocalStorageHandler('authorization', data.accessToken)
        onSetLocalStorageHandler('refresh', data.refreshToken)
        return axios(originalRequest)
      } catch (error) {
        console.log(error)
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)

export { instance, withoutTokenInstance }
