import axios, { AxiosInstance } from 'axios'
import { onSetLocalStorageHandler } from '../util/cookie'

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: { Authorization: localStorage.getItem('authorization') },
  withCredentials: true,
})

const withoutTokenInstance = axios.create({
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

//Axios의 인터셉터를 사용하여,
//419 응답을 받았을 때 refresh token을 사용하여
//새로운 access token을 가져오도록 설정
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const refreshToken = localStorage.getItem('refresh')
    console.log("refreshToken", refreshToken)
    const access = localStorage.getItem('authorization')
    const originalRequest = error.config
    if (error.response.status === 419) {
      console.log('갱신 시도중')
      originalRequest._retry = true
      const body = {
        refreshToken,
      }
      try {
        console.log('토큰 갱신 api 실행')
        const res = await instance.post(`/api/user/refresh`, refreshToken)
        console.log(res)
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
