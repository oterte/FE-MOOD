import { instance } from './instance'

export const postStreaming = async (musicId: number) => {
  await instance.post(`/api/misic/${musicId}/streaming`)
}
