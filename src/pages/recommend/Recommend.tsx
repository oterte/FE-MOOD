import { useNavigate } from 'react-router'
import { QueryClient, useMutation } from 'react-query'
import { getMusic } from '../../api/recommendApi'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { useState, useRef } from 'react'
import { StDivWrap, StDivMoodWrap, StDIvMusicPlayer } from './RecommendSt'

export interface Coordinate {
  coordinateX: number
  coordinateY: number
}

function Recommend() {
  const navigate = useNavigate()

  const [musicTitle, setMusicTitle] = useState<string>('')
  const [musicComposer, setMusicComposer] = useState<string>('')
  const [musicUrl, setMusicUrl] = useState<string>('')
  const [musicId, setMusicId] = useState<number | undefined>()
  const targetRef = useRef<HTMLDivElement>(null)

  const getMusicMutation = useMutation(['recommendMusic'], getMusic, {
    onSuccess: (data) => {
      setMusicTitle(data.musicTitle)
      setMusicComposer(data.composer)
      setMusicUrl(data.musicUrl)
      setMusicId(data.musicId)
      queryClient.invalidateQueries('recommendMusic')
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const queryClient = new QueryClient()

  const onClickcoordinateHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const coordinate: Coordinate = {
      coordinateX: 0,
      coordinateY: 0,
    }
    if (targetRef.current) {
      const moodWidth = targetRef.current?.clientWidth
      const moodHeight = targetRef.current?.clientHeight
      coordinate.coordinateX = Math.trunc(
        (e.nativeEvent.offsetX / moodWidth) * 100
      )
      coordinate.coordinateY = Math.trunc(
        ((e.nativeEvent.offsetY - moodHeight) / moodHeight) * 100 * -1
      )
    }

    queryClient.invalidateQueries(['recommendMusic'])
    getMusicMutation.mutate(coordinate)
  }
  console.log(musicId)

  return (
    <>
      <Header />
      <StDivWrap>
        <StDivMoodWrap
          ref={targetRef}
          onClick={onClickcoordinateHandler}
        ></StDivMoodWrap>
        <div>
          <StDIvMusicPlayer>
            <p>{musicTitle}</p>
            <p>{musicComposer}</p>
            <audio controls src={musicUrl}>
              오디오
            </audio>
            <button onClick={() => navigate(`/recommend/music/${musicId}`)}>
              댓글 남기기
            </button>
          </StDIvMusicPlayer>
        </div>
      </StDivWrap>
      <Footer />
    </>
  )
}

export default Recommend
