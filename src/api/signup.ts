import { instance } from './instance'

export interface UserInfo {
  id?: string
  email?: string
  nickname?: string
  password?: string
  confirm?: string
}

export const register = async (body: UserInfo) => {
  const response = await instance.post(`/api/signUp`, body)
  return response
}

export const checkId = async (id?: string) => {
  const value = {id: id}
  const response = await instance.post('/api/idCheck', value)
  return response
}

export const checkNickname = async (nickname?: string) => {
  const value = {nickname:nickname}
  const response = await instance.post('/api/nicknameCheck', value)
  return response
}
