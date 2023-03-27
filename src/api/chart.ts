import { instance } from './instance'

// 좋아요 기능
export const toggleLike = async ({ musicId }: { musicId: number }) => {
  const response = await instance.put(`api/music/${musicId}/like`)
  return response
}

// 좋아요 갯수별 순위
export const getlikedMusicList = async () => {
  const response = await instance.get(`api/music/likechart`)
  console.log('좋아요 순위:', response.data.likeChart)
  return response.data
}

// 스트리밍 조회수
export const streaming = async ({ musicId }: { musicId: number }) => {
  const response = await instance.post(`api/music/${musicId}/streaming`)
  return response
}

// 스트리밍 순 순위
export const getstreamingMusicList = async () => {
  const response = await instance.get(`api/music/streamingchart`)
  console.log('스트리밍 순위:', response.data.streamingChart)
  return response.data
}
