import { Nickname } from './../pages/musicDetail/MusicDetailSt';
import { instance } from './instance'

export const showProfile = async () => {
  const response = await instance.get('/api/user/userinfo')
  return response.data.userInfo
}

export const showComment = async (id:number) => {
  const response = await instance.get(`/api/user/reviewlist?page=${id}`)
  return response.data.reviewList
}

export const showReComment = async () => {
  const response = await instance.get('/api/user/recommentlist')
  return response.data.recommentList
}
export const likedMusic = async (id:number) => {
  const response = await instance.get(`/api/user/likelist?page=${id}`)
  return response.data.likeList
}

export const scrappedMusic = async () => {
  const response = await instance.get('/api/user/scraplist')
  return response.data.scrapList
}

export const editProfileImg = async (newProfile: any) => {
  await instance.patch('/api/user/uploadprofile', newProfile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const changeNickname = async (newNickname:string) => {
  console.log(newNickname)
  const body = {
    nickname:newNickname
  }
  await instance.patch('/api/user/changenickname', body)
}

export const deleteAccount = async () => {
  await instance.delete('/api/user/delete')
}

export const emotionHistory = async () => {}
