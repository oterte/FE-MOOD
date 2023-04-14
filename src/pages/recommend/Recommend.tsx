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
  StDivTitle,
  StPTitle,
  StPExplain,
  ComposerImg,
  Circle1,
  Circle2,
  Circle3,
  Circle4,
} from './RecommendSt'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { QueryClient, useMutation } from 'react-query'
import { getMusic } from '../../api/recommendApi'
import Header from '../../components/header/Header'
import { useState, useRef, useEffect } from 'react'
import { getlikedMusicList } from '../../api/chart'
import LikeCount from '../../components/like/LikeCount'
import ChartTab from '../../components/chart/ChartTab'
import { Music } from '../../components/chart/LikeChart'
import { setMusicPlay } from '../../redux/modules/musicPlayer'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/config/configStore'
import { setIsPlaying } from '../../redux/modules/isPlaying'
import Wrapper from '../../components/Wrapper'

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

  const [likeCount, setLikeCount] = useState<number>(0)
  const [likeStatus, setLikeStatus] = useState<boolean>(false)
  const [musicList, setMusicList] = useState<Music[]>([])
  const targetRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const selectMusicData = useSelector((state: RootState) => {
    return state.musicPlayer
  })

  const getMusicMutation = useMutation(['recommendMusic'], getMusic, {
    onSuccess: (data) => {
      setLikeCount(data.likeCount)
      setLikeStatus(data.likeStatus)

      if (data) {
        dispatch(setMusicPlay(data))
      }

      queryClient.invalidateQueries('recommendMusic')
    },
    onError: () => {
      return
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
    dispatch(setIsPlaying())

    queryClient.invalidateQueries(['recommendMusic'])
    getMusicMutation.mutate(coordinate)
  }

  const handleLikeUpdate = (
    updatedMusicId: number,
    updatedLikeStatus: boolean,
    updatedLikeCount: number
  ) => {
    if (selectMusicData?.musicId === updatedMusicId) {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }
  useEffect(() => {
    scrollToTop()
  }, [])

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
      (music) => music.musicId === selectMusicData?.musicId
    )
    if (updatedMusic) {
      setLikeStatus(updatedMusic.likeStatus)
      setLikeCount(updatedMusic.likesCount)
    }
  }, [musicList, selectMusicData])

  return (
    <>
      <div>
        <Wrapper>
          <Header />
          <StDivWrap>
            <StDivTitle>
              <StPTitle>듣고 싶은 음악의 영역을 클릭하세요</StPTitle>
              <StPExplain>영역을 기반으로 색다른 음악이 추천됩니다</StPExplain>
            </StDivTitle>
            <StDivMoodWrap ref={targetRef} onClick={onClickcoordinateHandler}>
              <Circle1 />
              <Circle2 />
              <Circle3 />
              <Circle4 />
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
                      musicId={selectMusicData?.musicId}
                      likeCount={likeCount}
                      likeStatus={likeStatus}
                      onLikeUpdate={handleLikeUpdate}
                    />
                  </StDivLike>
                  <StDivComposerImg>
                    <ComposerImg src={selectMusicData.imageUrl} />
                  </StDivComposerImg>
                  {!selectMusicData.composer ? (
                    <ClickBox>기분 영역을 클릭해보세요!</ClickBox>
                  ) : (
                    <MusicComtain>
                      <StPMusicTitle>
                        {selectMusicData.musicTitle}
                      </StPMusicTitle>
                      <StPMusicComposer>
                        {selectMusicData.composer}
                      </StPMusicComposer>
                      <LikeMusic>음악이 마음에 들었다면?</LikeMusic>
                      <MoveDetail
                        onClick={() =>
                          navigate(
                            `/recommend/music/${selectMusicData?.musicId}`
                          )
                        }
                      >
                        댓글 남기기
                      </MoveDetail>
                    </MusicComtain>
                  )}
                </StDIvMusicPlayer>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <CenterExplain>
                  다른 회원들은 어떤 곡을 좋아할까요?
                </CenterExplain>
                <DivChartWrap>
                  <ChartTab
                    musicId={selectMusicData?.musicId}
                    likeStatus={likeStatus}
                    musicList={musicList}
                    onLikeUpdate={handleLikeUpdate}
                  />
                </DivChartWrap>
              </div>
            </div>
          </StDivWrap>
        </Wrapper>
      </div>
    </>
  )
}

export default React.memo(Recommend)
