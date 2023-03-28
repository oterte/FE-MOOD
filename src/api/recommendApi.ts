// recommend Page API
import { Coordinate } from '../pages/recommend/Recommend'
import { instance } from './instance'

export const getMusic = async (coordinate: Coordinate) => {
  const x = coordinate.coordinateX
  const y = coordinate.coordinateY
  const musicData = await instance.get(`/api/mood/${x}/${y}`)
  return musicData.data.data.data
}

export const getSurveyMusic = async (status1: number, status2: number) => {
  const musicData = await instance.get(`/api/survey/${status1}/${status2}`)
  return musicData.data.data
}
