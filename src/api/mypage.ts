import { instance } from './instance'


export const showProfile = async () => {
    const response = await instance.get('/api/user/userinfo')
    return response.data.userInfo
}

export const showComment = async () => {
    const response = await instance.get('/api/user/reviewlist')
    return response
}

export const showReComment = async () => {
    const response = await instance.get('/api/user/recommentlist')
    return response
}
export const likedMusic = async () => {
    const response = await instance.get('/api/user/likelist')
    return response.data.likeList
}

export const scrappedMusic = async () => {
    const response = await instance.get('/api/user/scraplist')
    return response.data.scrapList
}

export const editProfileImg = async () => {
    await instance.patch('/api/user/uploadprofile')
}

export const deleteAccount = async () => {
    
}

export const emotionHistory = async () => {}
