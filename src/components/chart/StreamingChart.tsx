import React, { useEffect, useState } from 'react'
import { getstreamingMusicList } from '../../api/chart'
import {
  ChartComposer,
  ChartImg,
  Chartnumber,
  ChartTitle,
  Con,
  Wrap,
} from './ChartStyle'
import { Music } from './LikeChart'
import { useDispatch } from 'react-redux'
import { setMusicPlay } from '../../redux/modules/musicPlayer'

function StreamingChart() {
  const [streamingList, setStreamingList] = useState<Music[]>([])
  const [visibleRankStart, setVisibleRankStart] = useState(0)

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
    const timer = setTimeout(() => {
      setVisibleRankStart((prevVisibleRankStart) =>
        prevVisibleRankStart === 0 ? 5 : 0
      )
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [visibleRankStart])

  const dispatch = useDispatch()
  const onClickMusicChangeHandler = (music: Music) => {
    dispatch(setMusicPlay(music))
  }

  return (
    <Wrap>
      {streamingList
        .slice(visibleRankStart, visibleRankStart + 5)
        .map((music, index) => (
          <Con
            key={music.musicId}
            onClick={() => onClickMusicChangeHandler(music)}
          >
            <Chartnumber>{visibleRankStart + index + 1} </Chartnumber>
            <ChartImg>IMG</ChartImg>
            <ChartTitle>{music.musicTitle}</ChartTitle>
            <ChartComposer>{music.composer}</ChartComposer>
          </Con>
        ))}
    </Wrap>
  )
}

export default React.memo(StreamingChart)
