import axios, { AxiosInstance } from 'axios'


const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_SERVER,
  headers: { Authorization: localStorage.getItem('authorization') },
  withCredentials: true,
})

instance.interceptors.request.use(
  function (config: any) {
    const token = localStorage.getItem('authorization')
    config.headers['authorization'] = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { instance }
