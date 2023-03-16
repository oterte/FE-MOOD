import React, { useEffect, useState } from 'react'
import { composerList } from '../../api/composerApi'
import { Contents, Desc, H3, P } from './ComposerListSt'

type MusicInfo = {
  musicTitle: string
  musicContent: string
  fileName: string
  musicUrl: string
}

const ComposerList = () => {
  const [tab, setTab] = useState(0)
  const [composer, setComposer] = useState('')
  const [musicInfos, setMusicInfos] = useState<MusicInfo[]>([])

  const composers = ['Beethoven', 'Mozart', 'Chopin', 'Vivaldi']

  const selectTabHandler = (index: any) => {
    setTab(index)
    setComposer(composers[index])
  }

  useEffect(() => {
    if (!composer) {
      setComposer(composers[0])
      return
    }

    const fetchData = async () => {
      const response = await composerList({ composer })
      console.log(response.data)

      if (Array.isArray(response.data)) {
        setMusicInfos(response.data)
      }
    }

    fetchData()
  }, [composer])

  return (
    <Contents>
      {composers.map((composerName, index) => (
        <li
          key={index}
          className={index === tab ? 'submenu focused' : 'submenu'}
          onClick={() => selectTabHandler(index)}
        >
          {composerName}
        </li>
      ))}
      {musicInfos.length > 0 && (
        <Desc>
          <H3>{musicInfos[tab].musicTitle}</H3>
          <P>{musicInfos[tab].musicContent}</P>
          <audio controls>
            <source src={musicInfos[tab].musicUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Desc>
      )}
    </Contents>
  )
}

export default ComposerList
