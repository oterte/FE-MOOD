import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getSearch } from '../../api/search'
import { Desc, H3 } from '../../components/composer/ComposerListSt'
import Header from '../../components/header/Header'
import Wrapper from '../../components/Wrapper'
import {
  ComposerDesc,
  ComposerImg,
  ComposerName,
  Fullname,
  Inpo,
  List,
  Wrap,
} from './SearchBarSt'

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

type MusicTitle = {
  id: number
  title: string
}

function SearchResultPage() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchTerm = queryParams.get('query')

  const [composerInfo, setComposerInfo] = useState<ComposerInfo | null>(null)
  const [composerSongs, setComposerSongs] = useState<ComposerSong[]>([])
  const [musicTitles, setMusicTitles] = useState<MusicTitle[]>([])

  useEffect(() => {
    if (searchTerm) {
      getSearch(searchTerm).then((data) => {
        setComposerInfo(data.composerInfo)
        setComposerSongs(data.composer)
        setMusicTitles(data.musicTitle)
      })
    }
  }, [searchTerm])

  // // onLikeUpdate 함수 추가
  // const onLikeUpdate = (musicId: number, newLikeStatus: boolean) => {
  //   setComposerSongs((prevComposerSongs) =>
  //     prevComposerSongs.map((song) =>
  //       song.musicId === musicId
  //         ? {
  //             ...song,
  //             likesCount: newLikeStatus ? song.likesCount + 1 : song.likesCount - 1,
  //             likeStatus: newLikeStatus,
  //           }
  //         : song
  //     )
  //   )
  // }

  return (
    <Wrapper>
      <Header />
      <Wrap>
        {composerInfo && (
          <Inpo>
            <ComposerImg src={composerInfo.imageUrl} />
            <ComposerName>{composerInfo.composer}</ComposerName>
            <Fullname>
              {composerInfo.koreanFullname}({composerInfo.birthDeath})
            </Fullname>
            <ComposerDesc>{composerInfo.describe}</ComposerDesc>
          </Inpo>
        )}
        {composerSongs && composerSongs.length > 0 && (
          <div>
            <List>
              <div>
                <div>no</div>
                <div>곡명</div>
                <div>좋아요</div>
                <div>스크랩</div>
                <div>더보기</div>
              </div>
              {composerSongs.map((music, index) => (
                <div key={`music-${music.musicId}`}>
                  <div>{index + 1}</div>
                  <H3>{music.musicTitle}</H3>
                  <div>
                    {/* <LikeCount
                    musicId={music.musicId}
                    likeCount={music.likesCount}
                    likeStatus={music.likeStatus}
                    onLikeUpdate={onLikeUpdate}
                  /> */}
                  </div>
                  <div>스크랩</div>
                  <div>더보기</div>
                </div>
              ))}
            </List>
          </div>
        )}
        {!composerInfo &&
          (!composerSongs || composerSongs.length === 0) &&
          (!musicTitles || musicTitles.length === 0) && (
            <p>검색에 대한 결과가 없습니다.</p>
          )}
      </Wrap>
    </Wrapper>
  )
}

export default SearchResultPage
