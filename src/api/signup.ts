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
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/signup`, body)
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
