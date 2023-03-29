import { useNavigate } from 'react-router'
import { QueryClient, useMutation } from 'react-query'
import { getMusic } from '../../api/recommendApi'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { useState, useRef, useEffect } from 'react'
import {
  StDivWrap,
  StDivMoodWrap,
  StDIvMusicPlayer,
  StDivComposerImg,
} from './RecommendSt'
import { getlikedMusicList } from '../../api/chart'
import LikeCount from '../../components/like/LikeCount'
import ChartTab from '../../components/chart/ChartTab'
import { Music } from '../../components/chart/LikeChart'
import useAudio, { UseAudioReturnType } from '../../hooks/useAudio'

export interface Coordinate {
  coordinateX: number
  coordinateY: number
}
interface MusicData {
  composer: string
  fileName: string
  musicContent: string
  musicId: number
  musicTitle: string
  musicUrl: string
  status: number
  tag: null
  userId: number
}

function Recommend() {
  const navigate = useNavigate()

  const [musicData, setMusicData] = useState<MusicData | undefined>()
  const [likeCount, setLikeCount] = useState<number>(0)
  const [likeStatus, setLikeStatus] = useState<boolean>(false)
  const [musicList, setMusicList] = useState<Music[]>([])
  const targetRef = useRef<HTMLDivElement>(null)
  const [handleTimeUpdate, audioRef, setMusicNumber]: any = useAudio()

  const getMusicMutation = useMutation(['recommendMusic'], getMusic, {
    onSuccess: (data) => {
      setMusicData(data)
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
  // useEffect(() => {
  //   if (musicId) setMusicNumber(musicId)
  // }, [musicId])

  const handleLikeUpdate = (
    updatedMusicId: number,
    updatedLikeStatus: boolean,
    updatedLikeCount: number
  ) => {
    if (musicData?.musicId === updatedMusicId) {
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
    const updatedMusic = musicList.find(
      (music) => music.musicId === musicData?.musicId
    )
    if (updatedMusic) {
      setLikeStatus(updatedMusic.likeStatus)
      setLikeCount(updatedMusic.likesCount)
    }
  }, [musicList, musicData])
  console.log(musicData)

  return (
    <>
      <Header />
      <StDivWrap>
        <StDivMoodWrap
          ref={targetRef}
          onClick={onClickcoordinateHandler}
        ></StDivMoodWrap>
        <audio
          controls
          ref={audioRef}
          src={musicData?.musicUrl}
          onTimeUpdate={() => handleTimeUpdate(musicData?.musicId)}
        >
          오디오
        </audio>
        <div style={{ display: 'flex' }}>
          <StDIvMusicPlayer>
            <div>
              <LikeCount
                musicId={musicData?.musicId}
                likeCount={likeCount}
                likeStatus={likeStatus}
                onLikeUpdate={handleLikeUpdate}
              />
            </div>
            <StDivComposerImg>IMG</StDivComposerImg>
            {/* <p>{musicData}</p> */}
            {!musicData ? (
              <div>기분 영역을 클릭해보세요!</div>
            ) : (
              <div>
                <p>{musicData.musicTitle}</p>
                <p>{musicData.composer}</p>
                <p>음악이 마음에 들었다면?</p>
                <button
                  onClick={() =>
                    navigate(`/recommend/music/${musicData?.musicId}`)
                  }
                >
                  댓글 남기기
                </button>
              </div>
              // <div></div>
            )}
          </StDIvMusicPlayer>
          <ChartTab
            musicId={musicData?.musicId}
            likeStatus={likeStatus}
            musicList={musicList}
            onLikeUpdate={handleLikeUpdate}
          />
        </div>
      </StDivWrap>
      {/* <Footer /> */}
    </>
  )
}

export default Recommend
