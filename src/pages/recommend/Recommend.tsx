import { useNavigate, useParams } from 'react-router'
import { QueryClient, useMutation } from 'react-query'
import { getMusic } from '../../api/recommendApi'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import {
  StDivWrap,
  StDivMoodWrap,
  StDivMoodContainer,
  StDIvMusicPlayer,
} from './RecommendSt'
import { useState } from 'react'

interface getMusicData {
  musicTitle: string | undefined
  composer: string | undefined
  musicUrl: string | undefined
}

const musicData: getMusicData = {
  musicTitle: undefined,
  composer: undefined,
  musicUrl: undefined,
}

function Recommend() {
  const param = useParams()
  const navigate = useNavigate()
  const [musicTitle, setMusicTitle] = useState<string>('')
  const [musicComposer, setMusicComposer] = useState<string>('')
  const [musicUrl, setMusicUrl] = useState<string>('')
  const [musicId, setMusicId] = useState<number | undefined>()

  const moodNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const getNumber: number = 1
  const getMusicMutation = useMutation(['recommendMusic'], getMusic, {
    onSuccess: (data) => {
      // data만 잘 받아오면 musicData에 값을 넣어줌
      setMusicTitle(data.musicTitle)
      setMusicComposer(data.composer)
      setMusicUrl(data.musicUrl)
      setMusicId(data.musicId)
      queryClient.invalidateQueries('recommendMusic')
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const queryClient = new QueryClient()
  const onClickGetMusicHandler = (id: number) => {
    queryClient.invalidateQueries(['recommendMusic'])
    getMusicMutation.mutate(id)
  }

  return (
    <>
      <Header />
      <StDivWrap>
        <StDivMoodWrap>
          {moodNumberArray.map((item: number) => {
            return (
              <StDivMoodContainer
                key={item}
                onClick={() => onClickGetMusicHandler(item)}
              >
                {item}
              </StDivMoodContainer>
            )
          })}
        </StDivMoodWrap>
        <div>
          {/* {musicTitle === '' ? null : ( */}
            <StDIvMusicPlayer>
              <p>{musicTitle}</p>
              <p>{musicComposer}</p>
              <audio controls src={musicUrl}>
                오디오
              </audio>
              <button onClick={() => navigate(`/recommend/music/${musicId}`)}>
                댓글 남기기
              </button>
            </StDIvMusicPlayer>
          {/* )} */}
        </div>
      </StDivWrap>
      <Footer />
    </>
  )
}

export default Recommend
