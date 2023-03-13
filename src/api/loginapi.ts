import { instance } from './instance'
import { UserInfo } from './signup'

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
