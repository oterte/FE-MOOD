import { instance } from './instance'
import { UserInfo } from './signup'

export const login = async ({ id, password }: UserInfo) => {
  const body = {
    id: id,
    password: password,
  }
  const response = await instance.post('/api/login', body)
  return response
}
