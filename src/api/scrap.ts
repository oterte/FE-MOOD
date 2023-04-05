import { withoutTokenInstance, instance } from './instance'

// 스크랩
export const scrapMusic = async ({ musicId }: { musicId: number }) => {
  const response = await instance.put(`api/music/${musicId}/scrap`)
  return response
}

// 스크랩 상태 조회
export const getscrapList = async ({ musicId }: { musicId: number }) => {
  const response = await withoutTokenInstance.get(`api/music/${musicId}/scrap`)
  return response.data
}
