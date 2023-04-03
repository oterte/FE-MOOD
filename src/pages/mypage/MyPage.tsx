import React from 'react'
import Header from '../../components/header/Header'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
} from './mypageSC'
import { MyPageContentsContainer } from './mypagecontentsSC'
import { useQuery } from 'react-query'
import { showProfile } from '../../api/mypage'
import MyPageBody from './MyPageBody'

function MyPage() {
  const { isLoading, isError, data, error } = useQuery(['profile'], showProfile)
  if (isLoading) {
    return <h1>로딩중</h1>
  }
  if (isError) {
    console.log(isError)
  }

  console.log(error)
  return (
    <>
      <Header />
      <MyPageProfileContainer>
        <MyPageProfileBodyContainer>
          <p>마이페이지</p>
          <MyPageProfileImgBox>
            <MyPageProfileImg src={data.profileUrl} />
          </MyPageProfileImgBox>
          <div>
            <p>{data.nickname} 님 환영합니다</p>
          </div>
          <div>
            <span>당신의 최근 감정 상태는 XXX 입니다.</span>
          </div>
          <div>
            <span>지금의 기분을 확인해보실래요?</span>
          </div>
        </MyPageProfileBodyContainer>
      </MyPageProfileContainer>
      <MyPageBody />
      <MyPageContentsContainer></MyPageContentsContainer>
    </>
  )
}

export default MyPage
