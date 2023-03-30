import { instance } from './instance'

export const showProfile = async () => {
  const response = await instance.get('/api/user/userinfo')
  return response.data.userInfo
}

export const showComment = async () => {
  const response = await instance.get('/api/user/reviewlist')
  return response.data.reviesList
}

export const showReComment = async () => {
  const response = await instance.get('/api/user/recommentlist')
  return response.data.recommentList
}
export const likedMusic = async () => {
  const response = await instance.get('/api/user/likelist')
  return response.data.likeList
}

export const scrappedMusic = async () => {
  const response = await instance.get('/api/user/scraplist')
  return response.data.scrapList
}

export const editProfileImg = async (newProfile: any) => {
  console.log(newProfile)
  await instance.patch('/api/user/uploadprofile', newProfile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const deleteAccount = async () => {
  await instance.delete('/api/user/delete')
}

export const emotionHistory = async () => {}
