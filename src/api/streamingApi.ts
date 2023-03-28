import axios from 'axios'

export const postStreaming = async (musicId: number) => {
  await axios.post(`/api/misic/${musicId}/streaming`)
}
