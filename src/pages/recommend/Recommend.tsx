import { useNavigate } from 'react-router'
import { QueryClient, useMutation } from 'react-query'
import { getMusic } from '../../api/recommendApi'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { useState, useRef, useEffect } from 'react'
import { StDivWrap, StDivMoodWrap, StDIvMusicPlayer } from './RecommendSt'
import { getlikedMusicList } from '../../api/chart'
import LikeCount from '../../components/like/LikeCount'
import ChartTab from '../../components/chart/ChartTab'
import { Music } from '../../components/chart/LikeChart'
import useAudio, { UseAudioReturnType } from '../../hooks/useAudio'

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
  const [likeCount, setLikeCount] = useState<number>(0)
  const [likeStatus, setLikeStatus] = useState<boolean>(false)
  const [musicList, setMusicList] = useState<Music[]>([])
  const targetRef = useRef<HTMLDivElement>(null)
  const [handleTimeUpdate, audioRef, setMusicNumber]: UseAudioReturnType =
    useAudio()

  const getMusicMutation = useMutation(['recommendMusic'], getMusic, {
    onSuccess: (data) => {
      setMusicTitle(data.musicTitle)
      setMusicComposer(data.composer)
      setMusicUrl(data.musicUrl)
      setMusicId(data.musicId)
      setLikeCount(data.likeCount)
      setLikeStatus(data.likeStatus)
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
  useEffect(() => {
    if (musicId) setMusicNumber(musicId)
  }, [musicId])

  const handleLikeUpdate = (
    updatedMusicId: number,
    updatedLikeStatus: boolean,
    updatedLikeCount: number
  ) => {
    if (musicId === updatedMusicId) {
      setLikeStatus(updatedLikeStatus)
      setLikeCount(updatedLikeCount)
    }

    setMusicList((prevMusicList) =>
      prevMusicList.map((music) =>
        music.musicId === updatedMusicId
          ? {
              ...music,
              likeStatus: updatedLikeStatus,
              likesCount: updatedLikeCount,
            }
          : music
      )
    )
  }

  useEffect(() => {
    const fetchMusicList = async () => {
      const response = await getlikedMusicList()
      if (Array.isArray(response.likeChart)) {
        setMusicList(response.likeChart)
      }
    }
    fetchMusicList()
  }, [])

  useEffect(() => {
    const updatedMusic = musicList.find((music) => music.musicId === musicId)
    if (updatedMusic) {
      setLikeStatus(updatedMusic.likeStatus)
      setLikeCount(updatedMusic.likesCount)
    }
  }, [musicList, musicId])

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
            <audio
              controls
              ref={audioRef}
              src={musicUrl}
              onTimeUpdate={handleTimeUpdate}
            >
              오디오
            </audio>
            <LikeCount
              musicId={musicId}
              likeCount={likeCount}
              likeStatus={likeStatus}
              onLikeUpdate={handleLikeUpdate}
            />
            <button onClick={() => navigate(`/recommend/music/${musicId}`)}>
              댓글 남기기
            </button>
          </StDIvMusicPlayer>
          <ChartTab
            musicId={musicId}
            likeStatus={likeStatus}
            musicList={musicList}
            onLikeUpdate={handleLikeUpdate}
          />
        </div>
      </StDivWrap>
      <Footer />
    </>
  )
}

export default Recommend
