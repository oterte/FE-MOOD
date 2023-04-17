import { withoutTokenInstance } from './instance'

export const postStreaming = async (musicId: number) => {
  await withoutTokenInstance.post(`/api/music/${musicId}/streaming`)
}
