import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { roomArray } from './ChatRoomArray'
import {
  StDivSelectRoomWrap,
  StPTitle,
  StPEmotionExplain,
  StDivRoomContain,
  StDivEmotionContain,
  StPEmotion,
  StDivImg,
  StDivExplain,
  StPExplain,
  StDivMoveRoom,
} from './SelectChatSt'
import Play from '../../components/playbar/Play'

function SelectChat() {
  const navigate = useNavigate()
  const onClickEnterChatRoomHandler = (id: number) => {
    navigate(`/chatroom/${id}`)
  }
  return (
    <>
      <Header />
      <StDivSelectRoomWrap>
        <StPTitle>당신의 지금 감정을 실시간으로 나누어 보세요.</StPTitle>
        <StPEmotionExplain>
          감정 아이콘은 각 작곡가별 음악 악보를 기반으로 창작되었습니다.
        </StPEmotionExplain>
        {roomArray.map((number) => {
          return (
            <StDivRoomContain key={number.number}>
              <StDivEmotionContain>
                <StDivImg>이미지</StDivImg>
                <StPEmotion>{number.emotion}</StPEmotion>
              </StDivEmotionContain>
              <StDivExplain>
                <StPExplain>{number.explain}</StPExplain>
                <StDivMoveRoom
                  onClick={() => onClickEnterChatRoomHandler(number.number)}
                >
                  참여하기
                </StDivMoveRoom>
              </StDivExplain>
            </StDivRoomContain>
          )
        })}
        <Play />
      </StDivSelectRoomWrap>
    </>
  )
}

export default SelectChat
