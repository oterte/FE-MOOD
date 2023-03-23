import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { likedMusic } from '../../api/mypage'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
  MyPageProfileImgContainer,
} from './mypageSC'
import {
  MyPageContentsContainer,
  MyPageTab,
  MyPageTabItem,
} from './mypagecontentsSC'
import { useNavigate } from 'react-router'

function MyPageLike() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { isLoading, isError, data } = useQuery(['like'], likedMusic)
  if (isLoading) {
    return <h1>로딩중</h1>
  }
  if (isError) {
    return <h1>에러</h1>
  }

  console.log(data)
  return (
    <>
      <Header />
      <MyPageProfileContainer>
        <MyPageProfileImgContainer>
          <MyPageProfileImgBox>
            <MyPageProfileImg src="http://newsimg.hankookilbo.com/2019/04/29/201904291390027161_3.jpg" />
          </MyPageProfileImgBox>
        </MyPageProfileImgContainer>
        <MyPageProfileBodyContainer>
          <div>
            <h1>누구누구 님 환영합니다</h1>
          </div>
          <div>
            <span>당신의 최근 감정 상태는 XXX 입니다.</span>
          </div>
          <div>
            <span>지금의 기분을 확인해보실래요?</span>
          </div>
        </MyPageProfileBodyContainer>
      </MyPageProfileContainer>
      <MyPageTab>
        <MyPageTabItem
          onClick={() => {
            navigate('/mypageScrap')
          }}
        >
          스크랩 음악
        </MyPageTabItem>
        <MyPageTabItem
          onClick={() => {
            navigate('/mypageComment')
          }}
        >
          남긴 댓글
        </MyPageTabItem>
        <MyPageTabItem
          onClick={() => {
            navigate('/mypagerecomment')
          }}
        >
          남긴 대댓글
        </MyPageTabItem>
        <MyPageTabItem
          onClick={() => {
            navigate('/mypageLike')
          }}
        >
          좋아요
        </MyPageTabItem>
        <MyPageTabItem
          onClick={() => {
            navigate('/mypageScrap')
          }}
        >
          감정 히스토리
        </MyPageTabItem>
        <MyPageTabItem>프로필 사진 변경</MyPageTabItem>
        <MyPageTabItem>회원 탈퇴</MyPageTabItem>
      </MyPageTab>
      <MyPageContentsContainer>
        <h1>좋아요</h1>
      </MyPageContentsContainer>
      <Footer />
    </>
  )
}

export default MyPageLike
