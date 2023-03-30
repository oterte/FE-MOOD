import { withoutTokenInstance } from './instance'

export const postStreaming = async (musicId: number) => {
  await withoutTokenInstance.post(`/api/misic/${musicId}/streaming`)
}
