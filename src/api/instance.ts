import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

// baseURL:`http://15.165.18.86:3000`,
const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: { Authorization: cookies.get('authorization') },
  withCredentials: true,
})

instance.interceptors.request.use(
  function (config: any) {
    const token = cookies.get('authorization')
    config.headers['authorization'] = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { instance }
