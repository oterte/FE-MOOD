import { QueryClient, useMutation } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router'
import { getMusic } from '../../api/recommendApi'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import {
  StDivWrap,
  StDivMoodWrap,
  StDivMoodContainer,
  StDIvMusicPlayer,
} from './RecommendSt'

function Recommend() {
  const param = useParams()
  const navigate = useNavigate()

  const moodNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  interface getMusicData {
    musicTitle?: string
    composer?: string
    musicUrl?: string
  }

  const musicData: getMusicData = {
    musicTitle: undefined,
    composer: undefined,
    musicUrl: undefined,
  }
  const getNumber: number = 1
  const getMusicMutation = useMutation(['recommendMusic'], getMusic, {
    onSuccess: (data) => {
      // data만 잘 받아오면 musicData에 값을 넣어줌
      // musicData.musicTitle =  data.musicTitle,
      // musicData.composer = data.composer,
      // musicData.musicUrl = data.musicUrl,
      // quertClient.invalidateQueries('recommendMusic')
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
          <StDIvMusicPlayer>
            <audio
              controls
              src="https://mozz-bucket.s3.ap-northeast-2.amazonaws.com/01-Copland-Danzon_Cubano-Bernstein1963.mp3"
              // src={musicData.musicUrl}
            >
              오디오
            </audio>
            {/* <button onClick={() => navigate(`recommend/music/${musicData.id}`)}>댓글 남기기</button> */}
          </StDIvMusicPlayer>
        </div>
      </StDivWrap>
      <Footer />
    </>
  )
}

export default Recommend
