import axios from 'axios'
import { instance } from './instance'

export interface UserInfo {
  id?: string
  email?: string
  nickname?: string
  password?: string
  confirm?: string
}

export const register = async (body: UserInfo) => {
  const response = await axios.post('http://15.165.18.86:3000/api/signup', body)
  return response
}

export const checkId = async (id?: string) => {
  const response = await instance.post('/api/idcheck', id)
  return response
}

export const checkNickname = async (nickname?: string) => {
  const response = await instance.post('/api/nicknamecheck', nickname)
  return response
}
