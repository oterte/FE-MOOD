import React from 'react'
import { useQuery } from 'react-query'
import { likedMusic, showProfile } from '../../api/mypage'
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
  const { isLoading, isError, data: likedata } = useQuery(['like'], likedMusic)
  const { isLoading: profileLoading, data: profileData } = useQuery(
    ['profile'],
    showProfile
  )
  if (isLoading) {
    return <h1>로딩중</h1>
  }
  if (profileLoading) {
    return <h1>로딩중..</h1>
  }
  if (isError) {
    return <h1>에러</h1>
  }

  console.log(likedata)
  console.log(profileData)
  return (
    <>
      <Header />
      <MyPageProfileContainer>
        <MyPageProfileImgContainer>
          <MyPageProfileImgBox>
            <MyPageProfileImg src={profileData.profileUrl} />
          </MyPageProfileImgBox>
        </MyPageProfileImgContainer>
        <MyPageProfileBodyContainer>
          <div>
            <h1>{profileData.nickname} 님 환영합니다</h1>
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
        <MyPageTabItem
          onClick={() => {
            navigate('/mypageEditprofile')
          }}
        >
          프로필 사진 변경
        </MyPageTabItem>
        <MyPageTabItem
          onClick={() => {
            navigate('/mypageDeleteaccount')
          }}
        >
          회원 탈퇴
        </MyPageTabItem>
      </MyPageTab>
      <MyPageContentsContainer>
        <h1>좋아요</h1>
      </MyPageContentsContainer>
      <Footer />
    </>
  )
}

export default MyPageLike
