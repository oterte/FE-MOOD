import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { scrappedMusic, showProfile } from '../../api/mypage'
import Header from '../../components/header/Header'
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
function MyPageScrab() {
  const navigate = useNavigate()
  const { isLoading, isError, data } = useQuery(['scrap'], scrappedMusic)
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

  console.log(data)
  console.log(profileData)

  return (
    <>
      <Header />
      <MyPageProfileContainer>
        <MyPageProfileBodyContainer>
          <p>마이페이지</p>
          <MyPageProfileImgBox>
            <MyPageProfileImg src={profileData.profileUrl} />
          </MyPageProfileImgBox>
          <div>
            <p>{profileData.nickname} 님 환영합니다</p>
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
        {/* <MyPageTabItem
          onClick={() => {
            navigate('/mypageScrap')
          }}
        >
          스크랩 음악
        </MyPageTabItem> */}
        <MyPageTabItem
          onClick={() => {
            navigate('/mypageComment')
          }}
        >
          남긴 댓글
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
            navigate('/mypageEditprofile')
          }}
        >
          프로필 변경
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
        <h1>스크랩</h1>
      </MyPageContentsContainer>
    </>
  )
}

export default MyPageScrab
