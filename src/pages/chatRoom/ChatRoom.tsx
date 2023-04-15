import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import angry from '../../assets/icons/angry_brown.webp'
import sad from '../../assets/icons/sad_brown.webp'
import happy from '../../assets/icons/happy_brown.webp'
import bore from '../../assets/icons/boring_brown.webp'
import embarrass from '../../assets/icons/embarrass_brown.webp'
import surprise from '../../assets/icons/surprise_brown.webp'
import {
  Wrap,
  StDivChatRoomChatListContain,
  StDivChatRoomChatListWrap,
  StDivChatRoomWrap,
  StDivUserList,
  StDivUserProfile,
  StDivProfileImg,
  StPProfileNickname,
  StDivRoomTitle,
  StDivRoomImg,
  StPRoomName,
  StDivChatRoom,
  StPChatListNickname,
  StDivChatListMessage,
  StDivChatSubmit,
  StInputChatSubmit,
  StBtnChatSubmit,
  RoomImg,
  ProfileImg,
  StSubmitWrap,
} from './ChatRoomSt'
import { onGetLocalStorage } from '../../util/cookie'
import { BeforeChatData, ChatData, RecieveData } from './ChatRoomArray'
import { expireToken } from '../../api/instance'
import Header from '../../components/header/Header'

const socket = io(`${process.env.REACT_APP_SERVER}`, {
  transports: ['websocket'],
})
const initSocketConnection = () => {
  socket.connect()
}
const disconnection = () => {
  socket.disconnect()
}

interface UserList {
  nickname: string
  profileUrl: string
}

function ChatRoom() {
  const [chatText, setChatText] = useState<string>('')
  const [recieveData, setRecieveData] = useState<RecieveData[]>([])
  const [beforeChatData, setBeforeChatData] = useState<BeforeChatData[]>([])
  const [userList, setUserList] = useState<UserList[]>([])
  const [index, setIndex] = useState<number>(0)
  const [roomName, setRoomName] = useState<string>('')
  const [roomImg, setRoomImg] = useState<string>('')

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
  const token = onGetLocalStorage('accessToken')

  useEffect(() => {
    if (roomId === 1) setRoomName('분노')
    setRoomImg(angry)
    if (roomId === 2) setRoomName('슬픔')
    setRoomImg(sad)
    if (roomId === 3) setRoomName('행복')
    setRoomImg(happy)
    if (roomId === 4) setRoomName('지루함')
    setRoomImg(bore)
    if (roomId === 5) setRoomName('부끄러움')
    setRoomImg(embarrass)
    if (roomId === 6) setRoomName('놀램')
    setRoomImg(surprise)
  }, [])

  useEffect(() => {
    initSocketConnection()
    socket.emit('roomId', roomId)
    socket.on('userList', (data) => {
      let beforeUserList: any = []
      data.map((data: string[]) => {
        if (data !== null) {
          beforeUserList.push(data)
        }
        setUserList(beforeUserList)
      })
    })
    if (!token) {
      socket.emit('newUser', undefined)
    } else {
      socket.emit('newUser', token)
    }
    return () => {
      socket.emit('getout', token)
      disconnection()
    }
  }, [])

  useEffect(() => {
    if (scrollRef.current?.scrollHeight) {
      setPrevScrollHeight(scrollRef.current.scrollHeight)
    }

    if (scrollRef.current)
      scrollRef.current.scrollTop =
        scrollRef.current?.scrollHeight - prevScrollheight
    if (scrollRef.current?.scrollHeight) {
      setPrevScrollHeight(scrollRef.current.scrollHeight)
    }
    socket.emit('scroll', index)
  }, [index])

  useEffect(() => {
    setTimeout(() => {
      if (scrollRef.current?.scrollHeight) {
        setPrevScrollHeight(scrollRef.current.scrollHeight)
      }
    }, 100)
  }, [index])

  useEffect(() => {
    socket.on('plusScroll', (data) => {
      setBeforeChatData([...data, ...beforeChatData])
    })
    if (scrollRef.current)
      scrollRef.current.scrollTop =
        scrollRef.current?.scrollHeight - prevScrollheight
    socket.on('receive', (data) => {
      setBeforeChatData(data)
    })
  }, [beforeChatData])

  const chatData: ChatData = {
    message: chatText,
    token: token,
  }
  const onSubmitChattingHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  const onChangeChatTextHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setChatText(e.target.value)
    },
    []
  )

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
    socket.on('receiveMessage', (data) => {
      setRecieveData([...recieveData, data])
    })
  }, [recieveData])

  useEffect(() => {
    socket.on('offUser', (nickname) => {
      setUserList(
        userList.filter((userList: UserList) => userList.nickname !== nickname)
      )
    })
  }, [userList])

  socket.on('error', () => {
    expireToken()
  })

  const userName = onGetLocalStorage('nickname')
  const navigate = useNavigate()

  return (
    <>
      {roomId > 6 ? (
        navigate('/recommend')
      ) : (
        <>
          <Header />
          <Wrap>
            <StDivRoomTitle>
              <StDivRoomImg>
                <RoomImg src={roomImg} />
              </StDivRoomImg>
              <StPRoomName>{roomName}의 방</StPRoomName>
              <p style={{ color: '#999999' }}>
                당신의 감정을 실시간으로 나누어보세요
              </p>
            </StDivRoomTitle>
            <StDivChatRoomWrap>
              <StDivChatRoomChatListWrap ref={scrollRef}>
                <div ref={target}></div>
                {beforeChatData?.map((beforeChatData) => {
                  return (
                    <div key={beforeChatData.chatId}>
                      {beforeChatData.nickname === userName ? (
                        <StDivChatRoomChatListContain>
                          <StDivChatRoom>
                            <StPChatListNickname>
                              <span>{beforeChatData.nickname}</span>
                            </StPChatListNickname>
                            <StDivChatListMessage
                              style={{ backgroundColor: '#8b7d76' }}
                            >
                              <span>{beforeChatData.message}</span>
                            </StDivChatListMessage>
                          </StDivChatRoom>
                        </StDivChatRoomChatListContain>
                      ) : (
                        <StDivChatRoomChatListContain
                          style={{
                            margin: '0px 30px 0px auto',
                            textAlign: 'right',
                          }}
                        >
                          <StDivChatRoom>
                            <StPChatListNickname>
                              <span>{beforeChatData.nickname}</span>
                            </StPChatListNickname>
                            <StDivChatListMessage
                              style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                            >
                              <span>{beforeChatData.message}</span>
                            </StDivChatListMessage>
                          </StDivChatRoom>
                        </StDivChatRoomChatListContain>
                      )}
                    </div>
                  )
                })}

                {recieveData.map((recieveData, index) => {
                  return (
                    <div key={`${recieveData.message} + ${index}`}>
                      {recieveData.nickname === userName ? (
                        <StDivChatRoomChatListContain>
                          <StDivChatRoom>
                            <StPChatListNickname>
                              <span>{recieveData.nickname}</span>
                            </StPChatListNickname>
                            <StDivChatListMessage
                              style={{ backgroundColor: '#8b7d76' }}
                            >
                              <span>{recieveData.message}</span>
                            </StDivChatListMessage>
                          </StDivChatRoom>
                        </StDivChatRoomChatListContain>
                      ) : (
                        <StDivChatRoomChatListContain
                          style={{
                            margin: '0px 30px 0px auto',
                            textAlign: 'right',
                          }}
                        >
                          <StDivChatRoom>
                            <StPChatListNickname>
                              <span>{recieveData.nickname}</span>
                            </StPChatListNickname>
                            <StDivChatListMessage
                              style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                            >
                              <span>{recieveData.message}</span>
                            </StDivChatListMessage>
                          </StDivChatRoom>
                        </StDivChatRoomChatListContain>
                      )}
                    </div>
                  )
                })}
              </StDivChatRoomChatListWrap>
              <StDivUserList>
                <p>참여자 인원 ({userList.length})</p>
                {userList &&
                  userList.map((item) => {
                    return (
                      <StDivUserProfile key={item.nickname}>
                        <StDivProfileImg>
                          <ProfileImg src={item.profileUrl} />
                        </StDivProfileImg>
                        <StPProfileNickname>{item.nickname}</StPProfileNickname>
                      </StDivUserProfile>
                    )
                  })}
              </StDivUserList>
            </StDivChatRoomWrap>
            <StSubmitWrap>
              <StDivChatSubmit>
                <form onSubmit={onSubmitChattingHandler}>
                  <StInputChatSubmit
                    value={chatText}
                    onChange={onChangeChatTextHandler}
                    placeholder="채팅 입력"
                    maxLength={50}
                  />
                  <StBtnChatSubmit onClick={onClickSendMessageHandler}>
                    보내기
                  </StBtnChatSubmit>
                </form>
              </StDivChatSubmit>
            </StSubmitWrap>
          </Wrap>
        </>
      )}
    </>
  )
}

export default React.memo(ChatRoom)
