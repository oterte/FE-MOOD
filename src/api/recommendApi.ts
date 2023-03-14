// recommend Page API
import axios from 'axios'

export const getMusic = async (id: number) => {
  const musicData = await axios.get(`api/mood/${id}`)
  return musicData
}

export const getSurveyMusic = async (id: number) => {
  const musicData = await axios.get(`api/survey/${id}`)
}

// export const addMusic = async (formData: string | Blob) => {
//   await axios.post('/api/music', formData)
// }