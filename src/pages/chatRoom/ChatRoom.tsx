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
import { onGetCookieHandler } from '../../util/cookie'

interface ChatData {
  param?: string
  message: string
}
interface RecieveData {
  message: string | null
  user: {
    nickname: string,
    UserInfo: string | null
  }
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
  const [index, setIndex] = useState<number>(0)

  const [prevScrollheight, setPrevScrollHeight] = useState<number>(0)

  const { id } = useParams()

  const target = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }
  const callback = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0]

    if (target.isIntersecting) {
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
    if (target.current) observer.observe(target.current)
    return () => {
      if (target.current) observer.unobserve(target.current)
    }
  }, [])

  const roomId: number = Number(id)
  const token = onGetCookieHandler('authorization')

  useEffect(() => {
    initSocketConnection()
    socket.emit('roomId', roomId)
    socket.on('userList', (data) => {
      let beforeUserList: any = []
      data.map((data: string[]) => {
        if (data !== null) {
          beforeUserList.push(data)
        }
      })

      setUserList(beforeUserList)
    })
    if (!token) return
    socket.emit('newUser', token)
    return () => {
      disconnection()
    }
  }, [])

  const onScrollTo = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop =
        scrollRef.current.scrollHeight - prevScrollheight
    }
  }
  useEffect(() => {
    setTimeout(() => {
      if (scrollRef.current)
        scrollRef.current.scrollTop =
          scrollRef.current?.scrollHeight - prevScrollheight
    }, 50)
    socket.emit('scroll', index)
    onScrollTo()
  }, [index])

  setTimeout(() => {
    if (scrollRef.current?.scrollHeight)
      setPrevScrollHeight(scrollRef.current.scrollHeight)
  }, 50)

  useEffect(() => {
    socket.on('plusScroll', (data) => {
      setScrollChatData([...data, ...scrollChatData])
    })
  }, [scrollChatData])

  const chatData: ChatData = {
    message: chatText,
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
      if (!token) {
        alert('채팅을 하려면 로그인이 필요합니다.')
        setChatText('')
        return
      } else {
        socket.emit('sendMessage', chatData)
        setChatText('')
      }
    }
  }, [chatData])

  useEffect(() => {
    scrollToBottom()
  }, [recieveData, beforeChatData])

  useEffect(() => {
    socket.on('onUser', (data) => {
      setUserList([...userList, data.nickname])
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

  return (
    <StDivChatRoomWrap>
      <StDivChatRoomChatListWrap ref={scrollRef}>
        <div ref={target}></div>
        {scrollChatData?.map((scrollChatData) => {
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
                {recieveData.user.nickname} : {recieveData.message}
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
