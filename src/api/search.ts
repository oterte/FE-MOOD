import { withoutTokenInstance } from './instance'

export const getSearch = async (keyword: string) => {
  const response = await withoutTokenInstance.get(`/api/music/search?keyword=${encodeURIComponent(keyword)}`)
  console.log(response.data.data);
  
  return {
    composerInfo: response.data.data.composerInfo,
    composer: response.data.data.composerSong,
    musicTitle: response.data.data.musicTitle,
  }
}
