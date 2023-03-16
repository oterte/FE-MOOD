import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const instance: AxiosInstance = axios.create({
  baseURL: 'http://54.180.96.111:3000',
  headers: { Authorization: cookies.get('authorization') },

  withCredentials: true,
})

instance.interceptors.request.use(
  function (config: any) {
    console.log(config)
    const token = cookies.get('authorization')
    config.headers['authorization'] = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { instance }
