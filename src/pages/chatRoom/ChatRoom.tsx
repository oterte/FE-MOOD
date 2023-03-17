import React, { useRef } from 'react'
import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import {
  StDivChatRoomChatListContain,
  StDivChatRoomChatListWrap,
  StDivChatRoomWrap,
  StPChatRoom,
} from './ChatRoomSt'

interface ChatData {
  param?: string
  message: string
  nickname: string
}
interface RecieveData {
  message: string | null
  nickname: string | null
}
interface BeforeChatData {
  chatId: number
  roomId: number
  nickname: string
  message: string
  createdAt: string
  updatedAt: string
}

const socket = io(`${process.env.REACT_APP_SERVER}`)
const initSocketConnection = () => {
  socket.connect()
}
const disconnection = () => {
  socket.disconnect()
}

function FirstTest() {
  const [chatText, setChatText] = useState<string>('')
  const [recieveData, setRecieveData] = useState<RecieveData[]>([])
  const [beforeChatData, setBeforeChatData] = useState<BeforeChatData[]>([])
  const [userList, setUserList] = useState<string[]>([])

  const param = useParams()

  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  const nickname: string = 'jaeuk'
  const roomId: number = Number(param.id)
  // 들어왔을 때 socket을 연결하고 unmount 되면 socket을 disconnect
  useEffect(() => {
    initSocketConnection()
    socket.emit('roomId', roomId)
    socket.emit('newUser', nickname)
    return () => {
      socket.emit('offUser', nickname)
      setUserList(userList.filter((userList) => userList !== nickname))
      disconnection()
    }
  }, [])

  const chatData: ChatData = {
    message: chatText,
    nickname: nickname,
  }
  const onSubmitChattingHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  const onChangeChatTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatText(e.target.value)
  }

  const onClickSendMessageHandler = useCallback(() => {
    const noContent = chatText.trim() === ''
    if (noContent) {
      return
    } else {
      socket.emit('sendMessage', chatData)
      setChatText('')
    }
  }, [chatData])

  useEffect(() => {
    scrollToBottom()
  }, [chatData, recieveData])

  useEffect(() => {
    socket.on('onUser', (data) => {
      setUserList([...userList, data])
    })
  }, [userList])

  useEffect(() => {
    socket.on('receive', (data) => {
      setBeforeChatData(data)
    })
  }, [beforeChatData])

  useEffect(() => {
    socket.on('receiveMessage', (data) => {
      console.log('receiveMessage', data)
      setRecieveData([...recieveData, data])
    })
  }, [recieveData])

  return (
    <StDivChatRoomWrap>
      <StDivChatRoomChatListWrap ref={scrollRef}>
        {beforeChatData?.map((beforeChatData) => {
          return (
            <StDivChatRoomChatListContain key={beforeChatData.chatId}>
              <StPChatRoom>
                {beforeChatData.nickname} : {beforeChatData.message}
              </StPChatRoom>
            </StDivChatRoomChatListContain>
          )
        })}

        {recieveData.map((recieveData, index) => {
          return (
            <StDivChatRoomChatListContain
              key={`${recieveData.message} + ${index}`}
            >
              <StPChatRoom>
                {recieveData.nickname} : {recieveData.message}
              </StPChatRoom>
            </StDivChatRoomChatListContain>
          )
        })}
      </StDivChatRoomChatListWrap>

      <div>
        <form onSubmit={onSubmitChattingHandler}>
          <input
            value={chatText}
            onChange={onChangeChatTextHandler}
            placeholder="채팅 입력"
          />
          <button onClick={onClickSendMessageHandler}>보내기</button>
        </form>
      </div>
      <div>
        {userList.map((v) => {
          return (
            <div key={v}>
              {' '}
              <p>{v}</p>{' '}
            </div>
          )
        })}
      </div>
    </StDivChatRoomWrap>
  )
}

export default FirstTest
