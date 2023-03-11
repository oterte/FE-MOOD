import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  headers: {},
  withCredentials: true,
})

export { instance }
