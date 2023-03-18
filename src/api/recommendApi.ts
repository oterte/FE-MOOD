// recommend Page API
import axios from 'axios'
import { Coordinate } from '../pages/recommend/Recommend'

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
})

export const getMusic = async (coordinate: Coordinate) => {
  const x = coordinate.coordinateX
  const y = coordinate.coordinateY
  const musicData = await instance.get(
    `/api/mood/${x}/${y}`
  )
  return musicData.data.data[0]
}

export const getSurveyMusic = async (id: number) => {
  const musicData = await instance.get(`api/survey/${id}`)
}

// export const addMusic = async (formData: string | Blob) => {
//   await axios.post('/api/music', formData)
// }
