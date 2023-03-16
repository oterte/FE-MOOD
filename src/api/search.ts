import { instance } from './instance'

// 조회
const getSearch = async ({ keyword }: { keyword: string }) => {
  const response = await instance.get(
    `/api/music/search?keyword=${encodeURIComponent(keyword)}`
  )

  console.log('Server response:', response.data)

  return {
    composerInfo: response.data.data.composerInfo,
    composer: response.data.data.composerSong,
    musicTitle: response.data.data.musicTitle,
  }
}


export { getSearch }
