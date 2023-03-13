import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://15.165.204.86:8080',
  headers: {},
  withCredentials: true,
})

export { instance }
