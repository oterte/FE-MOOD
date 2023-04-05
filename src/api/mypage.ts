import { Nickname } from './../pages/musicDetail/MusicDetailSt'
import { instance } from './instance'

export const doScrap = async (id: number) => {
  console.log(id)
  const response = await instance.put(`/api/music/${id}/scrap`)
  return response
}

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

export const editProfileImg = async (newProfile: any) => {
  await instance.patch('/api/user/uploadprofile', newProfile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const changeNickname = async (newNickname: string) => {
  console.log(newNickname)
  const body = {
    nickname: newNickname,
  }
  await instance.patch('/api/user/changenickname', body)
}

export const deleteAccount = async () => {
  await instance.delete('/api/user/delete')
}

export const emotionHistory = async () => {}
