import axios from 'axios'
import { UserInfo } from './signup'

export const login = async ({ id, password }: UserInfo) => {
  const body = {
    id: id,
    password: password,
  }
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER}/api/login`,
    body
  )
  return response
}
