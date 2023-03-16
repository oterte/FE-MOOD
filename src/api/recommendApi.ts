// recommend Page API
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
})

export const getMusic = async (id: number) => {
  const musicData = await instance.get(`/api/mood/${id}`)
  return musicData.data.data[0]
}

export const getSurveyMusic = async (id: number) => {
  const musicData = await axios.get(
    `${process.env.REACT_APP_SERVER}/api/survey/${id}`
  )
  return musicData
}

// export const addMusic = async (formData: string | Blob) => {
//   await axios.post('/api/music', formData)
// }
