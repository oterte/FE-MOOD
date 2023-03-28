import { instance } from './instance'

// 작곡가 조회
const composerList = async ({ composer }: { composer: string }) => {
  const response = await instance.get(`/api/music/?composer=${composer}`)
  return response.data.data
}

export { composerList }
