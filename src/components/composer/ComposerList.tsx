import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { composerList } from '../../api/composerApi'
import LikeCount from '../like/LikeCount'
import {
  Contents,
  Desc,
  H3,
  Inpo,
  P,
  Li,
  ComposerImg,
  ComposerName,
  ComposerNameKo,
  Describe,
  Ment,
  Wrap,
} from './ComposerListSt'

type MusicInfo = {
  id: number
  musicTitle: string
  musicContent: string
  musicUrl: string
  likesCount: number
  likeStatus: boolean
}

const ComposerList = () => {
  const composers = [
    'Ludwig van Beethoven',
    'Wolfgang Amadeus Mozart',
    'Frederic Chopin',
    'Antonio Vivaldi',
  ]
  const [selectedComposer, setSelectedComposer] = useState(composers[0])

  const { data } = useQuery<{ composerInfo: any[]; music: MusicInfo[] }>(
    ['composerList', selectedComposer],
    () => composerList({ composer: selectedComposer }),
    { enabled: !!selectedComposer }
  )

  const [musicInfos, setMusicInfos] = useState<MusicInfo[] | undefined>()

  useEffect(() => {
    if (data) {
      setMusicInfos(
        data.music.map((music) => ({
          ...music,
          likeStatus: music.likeStatus,
        }))
      )
    }
  }, [data])

  const composerInfo = data?.composerInfo[0]

  const onLikeUpdate = (
    musicId: number,
    updatedLikeStatus: boolean,
    updatedLikeCount: number
  ) => {
    if (!musicInfos) return

    const updatedMusicInfos = musicInfos.map((musicInfo) => {
      if (musicInfo.id === musicId) {
        return {
          ...musicInfo,
          likeStatus: updatedLikeStatus,
          likesCount: updatedLikeCount,
        }
      }
      return musicInfo
    })
    setMusicInfos(updatedMusicInfos)
  }

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
                <div key={`music-${music.id || music.musicTitle}`}>
                  <div>{index + 1}</div>
                  <H3>{music.musicTitle}</H3>
                  <div>
                    <LikeCount
                      musicId={music.id}
                      likeCount={music.likesCount}
                      likeStatus={music.likeStatus}
                      onLikeUpdate={onLikeUpdate}
                    />
                  </div>
                  <div>스크랩</div>
                  <div>더보기</div>
                </div>
              ))}
            </Desc>
          </>
        ) : (
          <div>Loading</div>
        )}
      </Contents>
    </Wrap>
  )
}
export default ComposerList
