import { instance } from './instance'


export const showProfile = async () => {
  const response = await instance.get('/api/user/userinfo')
  return response.data.userInfo
}
export const showScrap = async (id: number) => {
  const response = await instance.get(`/api/user/scraplist?page=${id}`)
  return response.data
}

export const showComment = async (id: number) => {
  const response = await instance.get(`/api/user/reviewlist?page=${id}`)
  return response.data
}

export const likedMusic = async (id: number) => {
  const response = await instance.get(`/api/user/likelist?page=${id}`)
  return response.data
}

export const editProfileImg = async (newProfile: FormData) => {
  await instance.patch('/api/user/uploadprofile', newProfile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const changeNickname = async (newNickname: string) => {
  const body = {
    nickname: newNickname,
  }
  await instance.patch('/api/user/changenickname', body)
}

export const deleteAccount = async (password:string) => {
  const response = await instance.delete('/api/user/delete', {data:{email: password}})
  return response
}
