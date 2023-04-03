import { instance, withoutTokenInstance } from './instance'

export const postStreaming = async (musicId: number) => {
  await instance.post(`/api/music/${musicId}/streaming`)
}
export const postStreamingWithoutToken = async (musicId: number) => {
  await withoutTokenInstance.post(`/api/music/${musicId}/streaming`)
}