import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getSearch } from '../../api/search'
import { H3 } from '../../components/composer/ComposerListSt'
import Header from '../../components/header/Header'
import Play from '../../components/playbar/Play'
import Wrapper from '../../components/Wrapper'
import Heart from '../../assets/icons/Heart_brown.png'
import Down from '../../assets/icons/down_brown.png'

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

import { ShowRepliesBtn } from './SearchBarSt'

type ComposerInfo = {
  composerId: number
  composer: string
  describe: string
  imageUrl: string
  koreanFullname: string
  birthDeath: number
}

type ComposerSong = {
  musicId: number
  userId: number
  musicTitle: string
  musicContent: string
  musicUrl: string
  status: number
  composer: string
  fileName: string
}

function SearchResultPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchTerm = queryParams.get('query')
  const [composerInfo, setComposerInfo] = useState<ComposerInfo | null>(null)
  const [composerSongs, setComposerSongs] = useState<ComposerSong[]>([])
  const [showReplies, setShowReplies] = useState<{ [key: number]: boolean }>({})

  const toggleReplies = (musicId: number) => {
    setShowReplies((prevState) => ({
      ...prevState,
      [musicId]: !prevState[musicId],
    }))
  }

  useEffect(() => {
    if (searchTerm) {
      getSearch(searchTerm).then((data) => {
        setComposerInfo(data.composerInfo)
        if (data.composer.length > 0) {
          setComposerSongs(data.composer)
        } else {
          setComposerSongs(data.musicTitle)
        }
      })
    }
  }, [searchTerm])

  return (
    <Wrapper>
      <Header />
      <Wrap>
        {searchTerm && <Term>"{searchTerm}"에 대한 검색 결과입니다.</Term>}
        <Line />

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
        {composerSongs && composerSongs.length > 0 && (
          <List>
            <div>
              <div>no</div>
              <div>곡명</div>
              <div>좋아요</div>
              <div>스크랩</div>
              <div>더보기</div>
            </div>
            {composerSongs.map((music, index) => (
              <React.Fragment key={`music-fragment-${music.musicId}`}>
                <div key={`music-${music.musicId}`}>
                  <div>{index + 1}</div>
                  <H3>{music.musicTitle}</H3>
                  <button>
                    <img src={Heart} alt="like" />
                  </button>
                  <button>
                    <img src={Down} alt="down" />
                  </button>
                  <div>
                    <ShowRepliesBtn
                      onClick={() => toggleReplies(music.musicId)}
                    >
                      {showReplies[music.musicId] ? '숨기기' : '더보기'}
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
                        댓글 남기러 가기
                      </MusicDetailBtn>
                    </ContentContainer>
                  </ToogleWrap>
                )}
              </React.Fragment>
            ))}
          </List>
        )}
        {!composerInfo && (!composerSongs || composerSongs.length === 0) && (
          <p>검색에 대한 결과가 없습니다.</p>
        )}
      </Wrap>
      <Play />
    </Wrapper>
  )
}

export default SearchResultPage
