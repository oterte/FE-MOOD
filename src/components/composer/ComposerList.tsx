import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { composerList } from '../../api/composerApi'
import Play from '../playbar/Play'
import Down from '../../assets/icons/down_brown.png'
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
} from './ComposerListSt'
import { useNavigate } from 'react-router-dom'
import LikeCount from '../like/LikeCount'

type MusicInfo = {
  musicId: number
  musicTitle: string
  musicContent: string
  musicUrl: string
  likesCount: number
  likeStatus: boolean
  handleLikeUpdate: (
    musicId: number,
    likeStatus: boolean,
    likeCount: number
  ) => void
}

const ComposerList = () => {
  const navigate = useNavigate()
  const composers = ['Beethoven', 'Mozart', 'Chopin', 'Vivaldi']
  const [selectedComposer, setSelectedComposer] = useState(composers[0])

  const { data } = useQuery<{ composerInfo: any[]; music: MusicInfo[] }>(
    ['composerList', selectedComposer],
    () => composerList({ composer: selectedComposer }),
    { enabled: !!selectedComposer }
  )

  const [musicInfos, setMusicInfos] = useState<MusicInfo[] | undefined>()
  const [showReplies, setShowReplies] = useState<number>(-1)

  useEffect(() => {
    if (data) {
      setMusicInfos(
        data.music.map((music) => ({
          ...music,
          likeStatus: music.likeStatus,
          handleLikeUpdate: (
            musicId: number,
            likeStatus: boolean,
            likeCount: number
          ) => {
            setMusicInfos((prevState) =>
              prevState?.map((m) =>
                m.musicId === musicId
                  ? { ...m, likeStatus, likesCount: likeCount }
                  : m
              )
            )
          },
        }))
      )
    }
  }, [data])

  const composerInfo = data?.composerInfo[0]

  const toggleReplies = (musicIndex: number) => {
    setShowReplies((prevState) => (prevState === musicIndex ? -1 : musicIndex))
  }

  console.log(musicInfos)
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
                    <H3>{music.musicTitle}</H3>
                    <LikeCount
                      musicId={music.musicId}
                      likeCount={music.likesCount}
                      likeStatus={music.likeStatus}
                      onLikeUpdate={music.handleLikeUpdate}
                    />

                    <button>
                      <img src={Down} alt="down" />
                    </button>
                    <div>
                      <ShowRepliesBtn onClick={() => toggleReplies(index)}>
                        {showReplies === index ? '숨기기' : '더보기'}
                      </ShowRepliesBtn>
                    </div>
                  </div>
                  {showReplies === index && (
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
                          댓글 남기러 가기
                        </MusicDetailBtn>
                      </ContentContainer>
                    </ToogleWrap>
                  )}
                </React.Fragment>
              ))}
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
