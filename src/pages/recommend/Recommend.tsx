import { QueryClient, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getMusic } from "../../api/recommendApi";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { StDivWrap, StDivMoodWrap, StDivMoodContainer, StDIvMusicPlayer } from './RecommendSt'

function Recommend() {
  const param = useParams()

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
    // error 반환시 error 콘솔 -> 나중에 error 뜰 때마다 확인해보기
    onError: (error) => {
      console.log(error)
    },
  })

  const quertClient = new QueryClient()
  const onClickGetMusicHandler = (id: number) => {
    getMusicMutation.mutate(id)
  }

  return (
    <>
      <Header />
      <StDivWrap>
        {/* 기분 파악 영역 */}
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
          {/* 좋아요 리스트 */}
          <div></div>
          {/* 음악 재생영역 */}
          <StDIvMusicPlayer>음악 플레이어 나오는 곳</StDIvMusicPlayer>
        </div>
      </StDivWrap>
      <Footer />
    </>
  )
}

export default Recommend
