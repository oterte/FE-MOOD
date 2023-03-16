import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getSearch } from '../../api/search'

type ComposerInfo = {
  composerId: number
  composer: string
  describe: string
  imageUrl: string
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
      getSearch({ keyword: searchTerm }).then((data) => {
        setComposerInfo(data.composerInfo)
        setComposerSongs(data.composer)
        setMusicTitles(data.musicTitle)
      })
    }
  }, [searchTerm])

  return (
    <div>
      <div>
        {composerInfo && (
          <div>
            <h4>작곡가 정보:</h4>
            <p>이름: {composerInfo.composer}</p>
          </div>
        )}
        {composerSongs.length > 0 && (
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
        {musicTitles.length > 0 && (
          <div>
            <h4>음악 제목:</h4>
            <ul>
              {musicTitles.map((musicTitle) => (
                <li key={musicTitle.id}>{musicTitle.title}</li>
              ))}
            </ul>
          </div>
        )}
        {!composerInfo &&
          composerSongs.length === 0 &&
          musicTitles.length === 0 && <p>검색에 대한 결과가 없습니다.</p>}
      </div>
    </div>
  )
}

export default SearchResultPage
