import axios, { AxiosInstance } from 'axios'
import { refresh, refreshErrorHandle } from './refresh'


const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: { Authorization: localStorage.getItem('authorization') },
  withCredentials: true,
})

instance.interceptors.request.use(refresh, refreshErrorHandle)

export { instance }
