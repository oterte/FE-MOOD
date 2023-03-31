import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getSearch } from '../../api/search'
import {
  ComposerDesc,
  ComposerImg,
  ComposerName,
  Fullname,
  Inpo,
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

  return (
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
          <h4>곡 목록:</h4>
          <ul>
            {composerSongs.map((song) => (
              <li key={song.musicId}>
                {song.musicTitle}
                <audio controls>
                  <source src={song.musicUrl} type="audio/mpeg" />
                </audio>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* {musicTitles && musicTitles.length > 0 && (
        <div>
          <ul>
            {musicTitles.map((musicTitle) => (
              <li key={musicTitle.id}>{musicTitle.title}</li>
            ))}
          </ul>
        </div>
      )} */}
      {!composerInfo &&
        (!composerSongs || composerSongs.length === 0) &&
        (!musicTitles || musicTitles.length === 0) && (
          <p>검색에 대한 결과가 없습니다.</p>
        )}
    </Wrap>
  )
}

export default SearchResultPage
