import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMusicPlay } from '../../redux/modules/musicPlayer'
import { setIsPlaying, setTogglePlaying } from '../../redux/modules/isPlaying'
import { composerList } from '../../api/composerApi'
import LikeCount from '../like/LikeCount'
import Play from '../playbar/Play'
import { scrapMusic } from '../../api/scrap'
import Down from '../../assets/icons/down_brown.png'
import pre_brown from '../../assets/icons/pre_brown.png'
import morebtn from '../../assets/icons/morebtn.png'
import {
  Contents,
  Desc,
  H3,
  Inpo,
  Li,
  ComposerImg,
  ComposerName,
  ComposerNameKo,
  Describe,
  Ment,
  Wrap,
  ContentContainer,
  MusicDetailBtn,
  ShowRepliesBtn,
  SpanMusicContent,
  SpanMusicTitle,
  ToogleWrap,
  PaddingBottomDiv,
} from './ComposerListSt'
import { RootState } from '../../redux/config/configStore'

type MusicInfo = {
  musicId: number
  musicTitle: string
  musicContent: string
  musicUrl: string
  likeCount: number
  likeStatus: boolean
  scrapStatus: boolean
  handleLikeUpdate: (
    musicId: number,
    likeStatus: boolean,
    likeCount: number
  ) => void
}

const ComposerList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isPlaying = useSelector((state: RootState) => state.isPlaying.state)
  const composers = ['Beethoven', 'Mozart', 'Chopin', 'Vivaldi']
  const [selectedComposer, setSelectedComposer] = useState(composers[0])
  const [musicInfos, setMusicInfos] = useState<MusicInfo[] | undefined>()
  const [showReplies, setShowReplies] = useState<number[]>([])
  const [scrapStatus, setScrapStatus] = useState<{ [key: number]: boolean }>({})
  const [playingMusicId, setPlayingMusicId] = useState<number | null>(null)

  const handlePlayClick = (
    musicId: number,
    musicTitle: string,
    composer: string,
    musicUrl: string
  ) => {
    if (isPlaying) {
      dispatch(setTogglePlaying())
    }

    dispatch(setMusicPlay({ musicTitle, composer, musicId, musicUrl }))
    dispatch(setIsPlaying())
    setPlayingMusicId(musicId)
  }

  const { data } = useQuery<{ composerInfo: any[]; music: MusicInfo[] }>(
    ['composerList', selectedComposer],
    () => composerList({ composer: selectedComposer }),
    { enabled: !!selectedComposer }
  )

  const composerInfo = data?.composerInfo[0]

  const toggleReplies = (musicIndex: number) => {
    setShowReplies((prevState) => {
      const indexInState = prevState.indexOf(musicIndex)
      if (indexInState === -1) {
        return [...prevState, musicIndex]
      } else {
        const newState = [...prevState]
        newState.splice(indexInState, 1)
        return newState
      }
    })
  }

  const handleLikeUpdate = async (musicId: number, likeStatus: boolean) => {
    setMusicInfos((prevInfos) => {
      if (!prevInfos) return prevInfos

      const updatedInfos = prevInfos.map((music) => {
        if (music.musicId === musicId) {
          const newMusic = {
            ...music,
            likeStatus,
            likeCount: likeStatus ? music.likeCount + 1 : music.likeCount - 1,
          }
          localStorage.setItem(
            `music_${music.musicId}`,
            JSON.stringify(newMusic)
          )
          return newMusic
        }
        return music
      })
      return updatedInfos
    })
  }

  const handleScrapButtonClick = async (musicId: number) => {
    const token = localStorage.getItem('authorization')
    if (!token) {
      alert('로그인 후 이용 가능합니다.')
      return
    }
    try {
      await scrapMusic({ musicId })
      setMusicInfos((prevInfos) => {
        if (!prevInfos) return prevInfos

        const updatedInfos = prevInfos.map((music) => {
          if (music.musicId === musicId) {
            const newScrapStatus = !music.scrapStatus
            const updatedMusic = {
              ...music,
              scrapStatus: newScrapStatus,
            }
            localStorage.setItem(
              `music_${music.musicId}`,
              JSON.stringify(updatedMusic)
            )
            return updatedMusic
          }
          return music
        })
        return updatedInfos
      })
      setScrapStatus((prevStatus) => ({
        ...prevStatus,
        [musicId]: !prevStatus[musicId],
      }))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (data?.music) {
      const initialScrapStatus: { [key: number]: boolean } = {}
      const updatedMusicInfos = data.music.map((music) => {
        const musicInfoFromStorage = JSON.parse(
          localStorage.getItem(`music_${music.musicId}`) || '{}'
        )
        const currentScrapStatus = musicInfoFromStorage.hasOwnProperty(
          'scrapStatus'
        )
          ? musicInfoFromStorage.scrapStatus
          : false
        initialScrapStatus[music.musicId] = currentScrapStatus
        return {
          ...music,
          likeStatus: musicInfoFromStorage.likeStatus || music.likeStatus,
          likeCount: musicInfoFromStorage.likeCount || music.likeCount,
          scrapStatus: currentScrapStatus,
          handleLikeUpdate,
        }
      })
      setMusicInfos(updatedMusicInfos)
      setScrapStatus(initialScrapStatus)
    }
  }, [data, setScrapStatus])

  return (
    <Wrap>
      <Ment>작곡가별 음악을 추천받아 보세요.</Ment>
      <Contents>
        {composers.map((composerName) => (
          <Li
            key={composerName}
            className={
              composerName === selectedComposer ? 'submenu focused' : 'submenu'
            }
            onClick={() => setSelectedComposer(composerName)}
          >
            {composerName}
          </Li>
        ))}
        {composerInfo && musicInfos ? (
          <>
            <Inpo>
              <ComposerImg
                src={composerInfo.imageUrl}
                alt={`${selectedComposer} 이미지`}
              />
              <ComposerName>{composerInfo.composer}</ComposerName>
              <ComposerNameKo>
                {composerInfo.koreanFullname}({composerInfo.birthDeath})
              </ComposerNameKo>
              <Describe>{composerInfo.describe}</Describe>
            </Inpo>
            <div></div>
            <Desc>
              <div>
                <div>no</div>
                <div>곡명</div>
                <div>좋아요</div>
                <div>스크랩</div>
                <div>더보기</div>
              </div>
              {musicInfos?.map((music, index) => (
                <React.Fragment key={`music-fragment-${music.musicTitle}`}>
                  <div key={`music-${music.musicId || music.musicTitle}`}>
                    <div>{index + 1}</div>
                    <H3
                      onClick={() =>
                        handlePlayClick(
                          music.musicId,
                          music.musicTitle,
                          composerInfo.composer,
                          music.musicUrl
                        )
                      }
                    >
                      {music.musicTitle}
                      {playingMusicId === music.musicId && (
                        <img src="" alt="" />
                      )}
                    </H3>

                    <LikeCount
                      musicId={music.musicId}
                      likeCount={music.likeCount}
                      likeStatus={music.likeStatus}
                      onLikeUpdate={handleLikeUpdate}
                    />

                    <button
                      onClick={() => handleScrapButtonClick(music.musicId)}
                    >
                      <img
                        key={music.musicId}
                        src={`${
                          scrapStatus[music.musicId] ? pre_brown : Down
                        }?t=${Date.now()}`}
                        alt="scrap"
                      />
                    </button>

                    <div>
                      <ShowRepliesBtn onClick={() => toggleReplies(index)}>
                        <img src={morebtn} alt="More" />
                      </ShowRepliesBtn>
                    </div>
                  </div>
                  {showReplies.includes(index) && (
                    <ToogleWrap key={`music-info-${music.musicId}`}>
                      <ContentContainer>
                        <SpanMusicTitle>{music.musicTitle}</SpanMusicTitle>
                        <SpanMusicContent>
                          {music.musicContent}
                        </SpanMusicContent>
                        <MusicDetailBtn
                          onClick={() =>
                            navigate(`/recommend/music/${music?.musicId}`)
                          }
                        >
                          댓글 남기러 가기&nbsp;&nbsp;{'>'}
                        </MusicDetailBtn>
                      </ContentContainer>
                    </ToogleWrap>
                  )}
                </React.Fragment>
              ))}
              <PaddingBottomDiv />
            </Desc>
          </>
        ) : (
          <div>Loading</div>
        )}
      </Contents>
      <Play />
    </Wrap>
  )
}
export default ComposerList
