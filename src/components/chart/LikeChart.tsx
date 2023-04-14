import React, { useEffect, useState } from 'react'
import LikeCount from '../like/LikeCount'
import {
  Con,
  Wrap,
  Chartnumber,
  ChartImg,
  ChartTitle,
  ChartComposer,
  ComposerImg,
} from './ChartStyle'
import { useDispatch } from 'react-redux'
import { setMusicPlay } from '../../redux/modules/musicPlayer'
import { setIsPlaying } from '../../redux/modules/isPlaying'

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
  imageUrl: string
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
}

function LikeChart({
  musicId,
  likeStatus,
  onLikeUpdate,
  musicList,
}: LikeChartProps) {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 5 })
  const [stopTimer, setStopTimer] = useState(false)

  useEffect(() => {
    if (!stopTimer) {
      const timer = setTimeout(() => {
        setVisibleRange((prevRange) => {
          const newIndex = prevRange.start === 0 ? 5 : 0
          return { start: newIndex, end: newIndex + 5 }
        })
      }, 5000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [visibleRange, stopTimer])

  const dispatch = useDispatch()
  const onClickMusicChangeHandler = (music: Music) => {
    dispatch(setMusicPlay(music))
    dispatch(setIsPlaying())
  }

  const onMouseEnterHandler = () => {
    setStopTimer(true)
  }
  const onMouseLeaveHandler = () => {
    setStopTimer(false)
  }

  return (
    <Wrap>
      {musicList.length > 0
        ? musicList
            .slice(visibleRange.start, visibleRange.end)
            .map((music, index) => (
              <Con
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
                key={music.musicId}
                onClick={() => onClickMusicChangeHandler(music)}
              >
                <Chartnumber>{index + visibleRange.start + 1}</Chartnumber>
                <ChartImg>
                  <ComposerImg src={music.imageUrl} />
                </ChartImg>
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
        : null}
    </Wrap>
  )
}

export default React.memo(LikeChart)
