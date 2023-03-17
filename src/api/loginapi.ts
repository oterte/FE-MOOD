import { instance } from './instance'
import { UserInfo } from './signup'
import axios from 'axios'
// id, password
export const login = async ({ id, password }: UserInfo) => {
  console.log(id, password)
  const body = {
    id: id,
    password: password,
  }
  const response = await instance.post('/api/login', body)
  return response
}


export const kakaoLogin  = async () => {
  const response = await axios.get('http://15.165.18.86:3000/api/kakao/callback')
  console.log(response)
  // return response
}