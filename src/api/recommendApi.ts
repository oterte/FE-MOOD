// recommend Page API
import { Coordinate } from '../pages/recommend/Recommend'
import { withoutTokenInstance } from './instance'

export const getMusic = async (coordinate: Coordinate) => {
  const musicData = await withoutTokenInstance.get(
    `/api/music/mood/${coordinate.coordinateX}/${coordinate.coordinateY}`
  )
  return musicData.data.music
}

export const getSurveyMusic = async (status1: number, status2: number) => {
  const musicData = await withoutTokenInstance.get(
    `/api/music/survey/${status1}/${status2}`
  )
  return musicData.data
}
