import { useNavigate } from 'react-router-dom'
import { roomArray } from './ChatRoomArray'
import { StDivSelectRoomComtain, StDivSelectRoomWrap } from './SelectChatSt'

function SelectChat() {
  const navigate = useNavigate()
  const onClickEnterChatRoomHandler = (id:number) => {
    navigate(`/chatroom/${id}`)
  }
  return (
    <StDivSelectRoomWrap>
      {roomArray.map((number) => {
        return (
          <StDivSelectRoomComtain key={number.number}>
            <div onClick={() => onClickEnterChatRoomHandler(number.number)}>
              <span>{number.emotion}</span>
            </div>
          </StDivSelectRoomComtain>
        )
      })}
    </StDivSelectRoomWrap>
  )
}

export default SelectChat
