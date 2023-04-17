import React, { useEffect, useState } from 'react'
import { getstreamingMusicList } from '../../api/chart'
import {
  ChartComposer,
  ChartImg,
  Chartnumber,
  ChartTitle,
  Con,
  Wrap,
  ComposerImg,
} from './ChartStyle'
import { Music } from './LikeChart'
import { useDispatch } from 'react-redux'
import { setMusicPlay } from '../../redux/modules/musicPlayer'
import { setIsPlaying } from '../../redux/modules/isPlaying'

function StreamingChart() {
  const [streamingList, setStreamingList] = useState<Music[]>([])
  const [visibleRankStart, setVisibleRankStart] = useState(0)
  const [stopTimer, setStopTimer] = useState(false)

  useEffect(() => {
    const fetchStreamingList = async () => {
      const response = await getstreamingMusicList()
      if (Array.isArray(response.streamingChart)) {
        setStreamingList(response.streamingChart)
      }
    }
    fetchStreamingList()
  }, [])

  useEffect(() => {
    if (!stopTimer) {
      const timer = setTimeout(() => {
        setVisibleRankStart((prevVisibleRankStart) =>
          prevVisibleRankStart === 0 ? 5 : 0
        )
      }, 5000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [visibleRankStart, stopTimer])

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
      {streamingList
        .slice(visibleRankStart, visibleRankStart + 5)
        .map((music, index) => (
          <Con
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            key={music.musicId}
            onClick={() => onClickMusicChangeHandler(music)}
          >
            <Chartnumber>{visibleRankStart + index + 1} </Chartnumber>
            <ChartImg>
              <ComposerImg src={music.imageUrl} />
            </ChartImg>
            <ChartTitle>{music.musicTitle}</ChartTitle>
            <ChartComposer>{music.composer}</ChartComposer>
          </Con>
        ))}
    </Wrap>
  )
}

export default StreamingChart
