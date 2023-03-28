import { useState } from 'react'
import { useQuery } from 'react-query'
import { composerList } from '../../api/composerApi'
import {
  ComposerInpo,
  ComposerName2,
  Contents,
  Desc,
  H3,
  Inpo,
  P,
  Li,
  ComposerImg,
  ComposerName,
} from './ComposerListSt'

type MusicInfo = {
  musicTitle: string
  musicContent: string
  fileName: string
  musicUrl: string
}

const ComposerList = () => {
  const composers = ['Beethoven', 'Mozart', 'Chopin', 'Vivaldi']
  const [tab, setTab] = useState(0)
  const composer = composers[tab]

  const { data: musicInfos } = useQuery<MusicInfo[]>(composer, () =>
    composerList({ composer })
  )

  return (
    <Contents>
      {composers.map((composerName, index) => (
        <Li
          key={index}
          className={index === tab ? 'submenu focused' : 'submenu'}
          onClick={() => setTab(index)}
        >
          {composerName}
        </Li>
      ))}
      {musicInfos && (
        <>
          <Inpo>
            <ComposerImg src={composer} alt={`${composer} 이미지`} />
            <ComposerName>{composer}</ComposerName>
            <ComposerName2>{composer}</ComposerName2>
            <ComposerInpo>{musicInfos[0].musicContent}</ComposerInpo>
          </Inpo>
          <Desc>
            {musicInfos.map((musicInfo, index) => (
              <div key={index}>
                <H3>{musicInfo.musicTitle}</H3>
                <P>{musicInfo.musicContent}</P>
                <audio controls>
                  <source src={musicInfo.musicUrl} type="audio/mpeg" />
                </audio>
              </div>
            ))}
          </Desc>
        </>
      )}
    </Contents>
  )
}

export default ComposerList
