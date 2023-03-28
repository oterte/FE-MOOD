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
  const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/signUp`, body)
  return response
}

export const checkId = async (id?: string) => {
  const value = {id: id}
  const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/idCheck`, value)
  return response
}

export const checkNickname = async (nickname?: string) => {
  const value = {nickname:nickname}
  const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/nicknameCheck`, value)
  return response
}
