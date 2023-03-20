// recommend Page API
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
})

export const getMusic = async (id: number) => {
  const musicData = await instance.get(`/api/mood/${id}`)
  return musicData.data.data[0]
}

export const getSurveyMusic = async (status1: number, status2: number) => {
  const musicData = await instance.get(`/api/survey/${status1}/${status2}`)
  return musicData
}

// export const addMusic = async (formData: string | Blob) => {
//   await axios.post('/api/music', formData)
// }
