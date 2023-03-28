import { instance } from './instance'

export const getSearch = async (keyword: string) => {
  const response = await instance.get(`/api/music/search?keyword=${encodeURIComponent(keyword)}`)

  return {
    composerInfo: response.data.data.composerInfo,
    composer: response.data.data.composerSong,
    musicTitle: response.data.data.musicTitle,
  }
}
