import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import LikeCount from '../like/LikeCount'
import {
  Con,
  Wrap,
  Chartnumber,
  ChartImg,
  ChartTitle,
  ChartComposer,
} from './ChartStyle'
import { MusicData } from '../../pages/recommend/Recommend'

export interface Music {
  id: number
  title: string
  likeCount?: number
  musicId: number
  musicTitle: string
  composer: string
  musicUrl: string
  likesCount: number
  likeStatus: boolean
  streamCount?: number
}

interface LikeChartProps {
  musicId: number | undefined
  likeStatus: boolean
  onLikeUpdate: (
    musicId: number,
    likeStatus: boolean,
    likeCount: number
  ) => void
  musicList: Music[]
  setMusicData: Dispatch<SetStateAction<MusicData | undefined>>
}

function LikeChart({
  musicId,
  likeStatus,
  onLikeUpdate,
  musicList,
  setMusicData,
}: LikeChartProps) {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 5 })

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleRange((prevRange) => {
        const newIndex = prevRange.start === 0 ? 5 : 0
        return { start: newIndex, end: newIndex + 5 }
      })
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const onClickMusicHandler = (music: any) => {
    setMusicData(music)
  }

  return (
    <Wrap>
      {musicList.length > 0 ? (
        musicList
          .slice(visibleRange.start, visibleRange.end)
          .map((music, index) => (
            <Con key={music.musicId} onClick={() => onClickMusicHandler(music)}>
              <Chartnumber>{index + visibleRange.start + 1}</Chartnumber>
              <ChartImg>IMG</ChartImg>
              <ChartTitle>{music.musicTitle}</ChartTitle>
              <ChartComposer>{music.composer}</ChartComposer>
              <LikeCount
                musicId={music.musicId}
                likeCount={music.likesCount}
                likeStatus={
                  musicId === music.musicId ? likeStatus : music.likeStatus
                }
                onLikeUpdate={onLikeUpdate}
              />
            </Con>
          ))
      ) : (
        <p>Loading...</p>
      )}
    </Wrap>
  )
}

export default React.memo(LikeChart)
