import {
  StDivWrap,
  StDivMoodWrap,
  StDIvMusicPlayer,
  StDivComposerImg,
  StPVigor,
  StDivXcoordinate,
  StPDepress,
  StPPositive,
  StPCalm,
  StPMusicTitle,
  StPMusicComposer,
  StDivLike,
  DivChartWrap,
  MoveDetail,
  LikeMusic,
  CenterExplain,
  ClickBox,
  MusicComtain,
  AudioDiv,
  StDivTitle,
  StPTitle,
  StPExplain,
} from './RecommendSt'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { QueryClient, useMutation } from 'react-query'
import { getMusic } from '../../api/recommendApi'
import Header from '../../components/header/Header'
import { useState, useRef, useEffect } from 'react'

import { getlikedMusicList } from '../../api/chart'
import LikeCount from '../../components/like/LikeCount'
import ChartTab from '../../components/chart/ChartTab'
import { Music } from '../../components/chart/LikeChart'
import useAudio, { UseAudioReturnType } from '../../hooks/useAudio'
import Play from '../../components/playbar/Play'
import { setMusicPlay } from '../../redux/modules/musicPlayer'

export interface Coordinate {
  coordinateX: number
  coordinateY: number
}
export interface MusicData {
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
  const [handleTimeUpdate, audioRef, setMusicNumber]: UseAudioReturnType =
    useAudio()

  const dispatch = useDispatch()

  const getMusicMutation = useMutation(['recommendMusic'], getMusic, {
    onSuccess: (data) => {
      setMusicData(data)
      setLikeCount(data.likeCount)
      setLikeStatus(data.likeStatus)

      console.log(data)

      if (data) {
        dispatch(setMusicPlay(data))
      }

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

    dispatch({
      type: 'SET_MUSIC',
      // payload: '',
    })

    queryClient.invalidateQueries(['recommendMusic'])
    getMusicMutation.mutate(coordinate)
  }
  useEffect(() => {
    if (musicData?.musicId) setMusicNumber(musicData?.musicId)
  }, [musicData])

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

  return (
    <>
      <Header />
      <StDivWrap>
        <StDivTitle>
          <StPTitle>듣고 싶은 음악의 영역을 클릭하세요</StPTitle>
          <StPExplain>영역을 기반으로 색다른 음악이 추천됩니다</StPExplain>
        </StDivTitle>
        <StDivMoodWrap ref={targetRef} onClick={onClickcoordinateHandler}>
          <StPVigor>생기 넘치는</StPVigor>
          <StDivXcoordinate>
            <StPDepress>우울한</StPDepress>
            <StPPositive>긍정적인</StPPositive>
          </StDivXcoordinate>
          <StPCalm>차분한</StPCalm>
        </StDivMoodWrap>

        <div style={{ display: 'flex', textAlign: 'center' }}>
          <div>
            <CenterExplain>지금 듣는 이 곡은?</CenterExplain>
            <StDIvMusicPlayer>
              <StDivLike>
                <LikeCount
                  musicId={musicData?.musicId}
                  likeCount={likeCount}
                  likeStatus={likeStatus}
                  onLikeUpdate={handleLikeUpdate}
                />
              </StDivLike>
              <StDivComposerImg>IMG</StDivComposerImg>
              {!musicData ? (
                <ClickBox>기분 영역을 클릭해보세요!</ClickBox>
              ) : (
                <MusicComtain>
                  <StPMusicTitle>{musicData.musicTitle}</StPMusicTitle>
                  <StPMusicComposer>{musicData.composer}</StPMusicComposer>
                  <LikeMusic>음악이 마음에 들었다면?</LikeMusic>
                  <MoveDetail
                    onClick={() =>
                      navigate(`/recommend/music/${musicData?.musicId}`)
                    }
                  >
                    댓글 남기기
                  </MoveDetail>
                </MusicComtain>
              )}
            </StDIvMusicPlayer>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <CenterExplain>다른 회원들은 어떤 곡을 좋아할까요?</CenterExplain>
            <DivChartWrap>
              <ChartTab
                musicId={musicData?.musicId}
                likeStatus={likeStatus}
                musicList={musicList}
                onLikeUpdate={handleLikeUpdate}
                setMusicData={setMusicData}
              />
            </DivChartWrap>
          </div>
        </div>
        <AudioDiv>
          <audio
            controls
            ref={audioRef}
            src={musicData?.musicUrl}
            onTimeUpdate={handleTimeUpdate}
          />
        </AudioDiv>
      </StDivWrap>
      <Play></Play>
    </>
  )
}

export default Recommend
