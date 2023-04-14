import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsPlaying, setTogglePlaying } from '../../redux/modules/isPlaying'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrapMusic } from '../../api/scrap'
import { getSearch } from '../../api/search'
import LikeCount from '../../components/like/LikeCount'
import { H3 } from '../../components/composer/ComposerListSt'
import { ShowRepliesBtn } from './SearchBarSt'
import Header from '../../components/header/Header'
import Wrapper from '../../components/Wrapper'
import morebtn from '../../assets/icons/morebtn.png'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import play from '../../assets/icons/music_play_brown.png'

import {
  ComposerDesc,
  ComposerImg,
  ComposerInfoContainer,
  ComposerName,
  ContentContainer,
  Fullname,
  Inpo,
  Line,
  List,
  MusicDetailBtn,
  SpanMusicContent,
  SpanMusicTitle,
  Term,
  ToogleWrap,
  Wrap,
} from './SearchBarSt'
import { setMusicPlay } from '../../redux/modules/musicPlayer'
import { RootState } from '../../redux/config/configStore'
import { onGetLocalStorage } from '../../util/cookie'
import CustomAlert from '../../components/alret/CustomAlert'

interface ComposerInfo {
  composerId: number
  composer: string
  describe: string
  imageUrl: string
  koreanFullname: string
  birthDeath: number
}

interface ComposerSong {
  musicId: number
  userId: number
  musicTitle: string
  musicContent: string
  musicUrl: string
  status: number
  composer: string
  fileName: string
  likeCount: number
  likeStatus: boolean
  scrapStatus: boolean
  handleLikeUpdate: (
    musicId: number,
    likeStatus: boolean,
    likeCount: number
  ) => void
}

function SearchResultPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const isPlaying = useSelector((state: RootState) => state.isPlaying.state)
  const queryParams = new URLSearchParams(location.search)
  const searchTerm = queryParams.get('query')
  const [composerInfo, setComposerInfo] = useState<ComposerInfo | null>(null)
  const [composerSongs, setComposerSongs] = useState<ComposerSong[]>([])
  const [showReplies, setShowReplies] = useState<{ [key: number]: boolean }>({})
  const [musicInfos, setMusicInfos] = useState<ComposerSong[] | undefined>()
  const [scrapStatus, setScrapStatus] = useState<{ [key: number]: boolean }>({})
  const [playingMusicId, setPlayingMusicId] = useState<number | null>(null)
  const [hasSearchResult, setHasSearchResult] = useState<boolean | null>(null)
  const [showCustomAlert, setShowCustomAlert] = useState<boolean>(false)

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

  const toggleReplies = (musicId: number) => {
    setShowReplies((prevState) => ({
      ...Object.fromEntries(
        Object.entries(prevState).map(([key]) => [key, false])
      ),
      [musicId]: !prevState[musicId],
    }))
  }

  useEffect(() => {
    setComposerInfo(null)
    setComposerSongs([])

    if (searchTerm) {
      getSearch(searchTerm).then((data) => {
        setComposerInfo(data.composerInfo)
        if (data.composer.length > 0) {
          setComposerSongs(data.composer)
          setHasSearchResult(true)
        } else {
          setComposerSongs(data.musicTitle)
          setHasSearchResult(data.musicTitle.length > 0)
        }
      })
    } else {
      setHasSearchResult(null)
    }
  }, [searchTerm])

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
    const token = onGetLocalStorage('accessToken')
    if (!token) {
      setShowCustomAlert(true)
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
    if (composerSongs) {
      const initialScrapStatus: { [key: number]: boolean } = {}
      const updatedMusicInfos = composerSongs.map((music) => {
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
  }, [composerSongs, setScrapStatus])

  return (
    <Wrapper>
      <Header />
      <Wrap>
        <CustomAlert
          showAlert={showCustomAlert}
          onHide={() => setShowCustomAlert(false)}
          message="로그인 후 이용 가능합니다."
        />
        {searchTerm &&
          (composerInfo || (composerSongs && composerSongs.length > 0) ? (
            <>
              <Term>"{searchTerm}"에 대한 검색 결과입니다.</Term>
              <Line />
            </>
          ) : (
            <p>검색어가 표시되지 않습니다.</p>
          ))}

        {composerInfo && (
          <Inpo>
            <ComposerImg src={composerInfo.imageUrl} />
            <ComposerInfoContainer>
              <ComposerName>{composerInfo.composer}</ComposerName>
              <Fullname>
                {composerInfo.koreanFullname}({composerInfo.birthDeath})
              </Fullname>
              <ComposerDesc>{composerInfo.describe}</ComposerDesc>
            </ComposerInfoContainer>
          </Inpo>
        )}
        {musicInfos && musicInfos.length > 0 && (
          <List>
            <div>
              <div>no</div>
              <div>곡명</div>
              <div>재생</div>
              <div>좋아요</div>
              <div>스크랩</div>
              <div>더보기</div>
            </div>
            {musicInfos.map((music, index) => (
              <React.Fragment key={`music-fragment-${music.musicId}`}>
                <div key={`music-${music.musicId}`}>
                  <div>{index + 1}</div>
                  <H3
                    onClick={() =>
                      handlePlayClick(
                        music.musicId,
                        music.musicTitle,
                        music.composer,
                        music.musicUrl
                      )
                    }
                  >
                    {music.musicTitle}
                    {playingMusicId === music.musicId && <img src="" alt="" />}
                  </H3>
                  <img
                    onClick={() =>
                      handlePlayClick(
                        music.musicId,
                        music.musicTitle,
                        music.composer,
                        music.musicUrl
                      )
                    }
                    src={play}
                    alt="music_play"
                  />
                  <LikeCount
                    musicId={music.musicId}
                    likeCount={music.likeCount}
                    likeStatus={music.likeStatus}
                    onLikeUpdate={handleLikeUpdate}
                  />

                  <button
                    onClick={() => handleScrapButtonClick(music.musicId)}
                    style={{ cursor: 'pointer', marginBottom: '-5px' }}
                  >
                    {scrapStatus[music.musicId] ? (
                      <BsBookmarkFill size="23" color="#8b7d76" />
                    ) : (
                      <BsBookmark size="23" color="#8b7d76" />
                    )}
                  </button>

                  <div>
                    <ShowRepliesBtn
                      onClick={() => toggleReplies(music.musicId)}
                    >
                      <img src={morebtn} alt="More" />
                    </ShowRepliesBtn>
                  </div>
                </div>
                {showReplies[music.musicId] && (
                  <ToogleWrap key={`music-info-${music.musicId}`}>
                    <ContentContainer>
                      <SpanMusicTitle>{music.musicTitle}</SpanMusicTitle>
                      <SpanMusicContent>{music.musicContent}</SpanMusicContent>
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
          </List>
        )}
      </Wrap>
    </Wrapper>
  )
}

export default SearchResultPage
