import React from 'react'
import { useQuery } from 'react-query'
import { likedMusic, showProfile } from '../../api/mypage'
import Header from '../../components/header/Header'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
} from './mypageSC'
import { MyPageContentsContainer } from './mypagecontentsSC'
import MyPageBody from './MyPageBody'
import {
  MyPageBodyMiddle,
  MyPageBodyTop,
  MyPageLikeMiddleContainer,
  MyPageLikeMiddleDiv,
  MyPageLikeTopFirst,
  MyPageLikeTopRest,
  MyPageLikeTopSec,
} from './MyPageTable'
import { useNavigate } from 'react-router-dom'
type Like = {
  composer: string
  fileName: string
  musicId: string
  musicTitle: string
  musicUrl: string
}

function MyPageLike() {
  const navigate = useNavigate()
  const {
    isLoading,
    isError,
    data: likedata,
  } = useQuery<Like[]>(['like'], likedMusic)
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
      <MyPageBody />
      <MyPageContentsContainer>
        <MyPageBodyTop>
          <MyPageLikeTopFirst>작곡가 명</MyPageLikeTopFirst>
          <MyPageLikeTopSec>곡 정보</MyPageLikeTopSec>
          <MyPageLikeTopRest>재생</MyPageLikeTopRest>
          <MyPageLikeTopRest>댓글남기기</MyPageLikeTopRest>
        </MyPageBodyTop>
        <MyPageBodyMiddle>
          {likedata?.map((item) => (
            <MyPageLikeMiddleContainer key={item.musicId}>
              <MyPageLikeMiddleDiv>{item.composer}</MyPageLikeMiddleDiv>
              <MyPageLikeMiddleDiv>{item.fileName}</MyPageLikeMiddleDiv>
              <MyPageLikeMiddleDiv>
                <audio controls src={item.musicUrl} />
              </MyPageLikeMiddleDiv>
              <MyPageLikeMiddleDiv
                onClick={() => navigate(`/recommend/music/${item.musicId}`)}
              >
                댓글남기기
              </MyPageLikeMiddleDiv>
            </MyPageLikeMiddleContainer>
          ))}
        </MyPageBodyMiddle>
      </MyPageContentsContainer>
    </>
  )
}

export default MyPageLike
