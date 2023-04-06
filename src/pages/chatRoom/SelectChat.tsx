import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { roomArray } from './ChatRoomArray'
import { useState, useRef } from 'react'
import {
  StDivSelectRoomWrap,
  StPTitle,
  StPEmotionExplain,
  StDivRoomContain,
  StDivEmotionContain,
  StDivImg,
  StDivExplain,
  StDivMoveRoom,
  RoomImg,
} from './SelectChatSt'
import Play from '../../components/playbar/Play'

function SelectChat() {
  const navigate = useNavigate()
  const [hover, setHover] = useState<number>(0)
  const hoverRef = useRef<HTMLDivElement>(null)

  const onClickEnterChatRoomHandler = (id: number) => {
    navigate(`/chatroom/${id}`)
  }

  const onMouseOVerHandler = (number: number) => {
    setHover(number)
  }
  const onMouseOutHandler = () => {
    setHover(0)
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
            <StDivRoomContain
              ref={hoverRef}
              key={number.number}
              onMouseOver={() => onMouseOVerHandler(number.number)}
              onMouseOut={onMouseOutHandler}
              style={{
                color: hover === number.number ? '#ffffff' : 'black',
                backgroundColor:
                  hover === number.number ? '#4b372e' : '#efefef',
              }}
            >
              <StDivEmotionContain
                style={{
                  border:
                    hover === number.number
                      ? '2px solid #ffffff'
                      : '2px solid #4b372e',
                }}
              >
                <StDivImg>
                  <RoomImg
                    src={hover === number.number ? number.imgHover : number.img}
                  />
                </StDivImg>
                <p>{number.emotion}</p>
              </StDivEmotionContain>
              <StDivExplain>
                <p>{number.explain}</p>
                <StDivMoveRoom
                  style={{
                    backgroundColor:
                      hover === number.number ? '#8b7d76' : '#4b372e',
                  }}
                  onClick={() => onClickEnterChatRoomHandler(number.number)}
                >
                  참여하기
                </StDivMoveRoom>
              </StDivExplain>
            </StDivRoomContain>
          )
        })}
      </StDivSelectRoomWrap>
      <Play />
    </>
  )
}

export default SelectChat
