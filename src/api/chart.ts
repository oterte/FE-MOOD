import { withoutTokenInstance, instance } from './instance'

// 좋아요 기능
export const toggleLike = async ({ musicId }: { musicId: number }) => {
  console.log(musicId)
  const response = await instance.put(`api/music/${musicId}/like`)
  return response
}

// 좋아요 상태 조회
export const likeStatus = async ({ musicId }: { musicId: number }) => {
  const response = await instance.get(`api/music/${musicId}/like`)
  return response
}

// 좋아요 갯수별 순위
export const getlikedMusicList = async () => {
  const response = await withoutTokenInstance.get(`api/music/likechart`)
  return response.data
}

// 스트리밍 조회수
export const streaming = async ({ musicId }: { musicId: number }) => {
  const response = await withoutTokenInstance.post(
    `api/music/${musicId}/streaming`
  )
  return response
}

// 스트리밍 순 순위
export const getstreamingMusicList = async () => {
  const response = await withoutTokenInstance.get(`api/music/streamingchart`)
  return response.data
}
