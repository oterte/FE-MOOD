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
interface ScrollChatData {
  chatId: number
  roomId: number
  nickname: string
  message: string
  createdAt: string
  updatedAt: string
}

const socket = io(`${process.env.REACT_APP_SERVER}`, {
  transports: ['websocket'],
})
const initSocketConnection = () => {
  socket.connect()
}
const disconnection = () => {
  socket.disconnect()
}

function ChatRoom() {
  const [chatText, setChatText] = useState<string>('')
  const [recieveData, setRecieveData] = useState<RecieveData[]>([])
  const [beforeChatData, setBeforeChatData] = useState<BeforeChatData[]>([])
  const [scrollChatData, setScrollChatData] = useState<ScrollChatData[]>([])
  const [userList, setUserList] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)

  const param = useParams()

  const target = useRef<any>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }
  const callback = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0]

    if (target.isIntersecting && !isLoading) {
      setIndex((prev) => prev + 1)
    }
  }
  const observer = new IntersectionObserver(callback, options)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  useEffect(() => {
    observer.observe(target.current)
    return () => {
      observer.unobserve(target.current)
    }
  }, [])

  // userInfo가 구현 되면 다시 기능 수정
  const nickname: string = 'jaeuk'
  const roomId: number = Number(param.id)

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

  useEffect(() => {
    console.log('scroll 이벤트 발생')
    console.log(index)
    socket.emit('scroll', index)
  }, [index])

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
  }, [recieveData, beforeChatData])

  useEffect(() => {
    socket.on('onUser', (data) => {
      setUserList([...userList, data])
    })
  }, [userList])

  useEffect(() => {
    socket.on('offUser', (nickname) => {
      setUserList(userList.filter((userList: string) => userList !== nickname))
    })
  }, [userList])

  useEffect(() => {
    socket.on('receive', (data) => {
      setBeforeChatData(data)
    })
  }, [beforeChatData])

  useEffect(() => {
    socket.on('receiveMessage', (data) => {
      setRecieveData([...recieveData, data])
    })
  }, [recieveData])

  useEffect(() => {
    socket.on('plusScroll', (data) => {
      console.log(data)
      setScrollChatData([...data, ...scrollChatData ])
    })
  }, [scrollChatData])
  console.log("scroll Chat", scrollChatData)

  return (
    <StDivChatRoomWrap>
      <StDivChatRoomChatListWrap ref={scrollRef}>
        <div ref={target}></div>
        {
        scrollChatData?.map((scrollChatData) => {
          return (
            <StDivChatRoomChatListContain key={scrollChatData.chatId}>
              <StPChatRoom>
                {scrollChatData.nickname} : {scrollChatData.message}
              </StPChatRoom>
            </StDivChatRoomChatListContain>
          )
        })}
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

export default ChatRoom
