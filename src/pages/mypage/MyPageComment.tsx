import React from 'react'
import Header from '../../components/header/Header'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
} from './mypageSC'
import { MyPageContentsContainer } from './mypagecontentsSC'
import { useNavigate } from 'react-router'
import { useQuery } from 'react-query'
import { showComment, showProfile } from '../../api/mypage'
import MyPageBody from './MyPageBody'
import {
  MyPageBodyDiv,
  MyPageBodyMiddle,
  MyPageBodyMiddleContainer,
  MyPageBodyMiddleDiv,
  MyPageBodyTop,
  MyPageMiddleDivCursor,
} from './MyPageTable'

type Review = {
  musicId?: string
  reviewId?: string
  review?: string
}
function MyPageComment() {
  const {
    isLoading,
    isError,
    data: reviewData,
  } = useQuery<Review[]>(['myComment'], showComment)
  const { isLoading: profileLoading, data: profileData } = useQuery(
    ['profile'],
    showProfile
  )
  const navigate = useNavigate()
  if (isLoading) {
    return <h1>로딩중</h1>
  }
  if (profileLoading) {
    return <h1>로딩중..</h1>
  }
  if (isError) {
    return <h1>에러</h1>
  }

  console.log(reviewData)
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
          <MyPageBodyDiv>곡명</MyPageBodyDiv>
          <MyPageBodyDiv>댓글 내용</MyPageBodyDiv>
          <MyPageBodyDiv>댓글 페이지로</MyPageBodyDiv>
        </MyPageBodyTop>
        <MyPageBodyMiddle>
          {reviewData?.map((item) => (
            <MyPageBodyMiddleContainer key={item.reviewId}>
              <MyPageBodyMiddleDiv>{item.musicId}</MyPageBodyMiddleDiv>
              <MyPageBodyMiddleDiv>{item.review}</MyPageBodyMiddleDiv>
              <MyPageMiddleDivCursor
                onClick={() => navigate(`/recommend/music/${item.musicId}`)}
              >
                댓글남기기
              </MyPageMiddleDivCursor>
            </MyPageBodyMiddleContainer>
          ))}
        </MyPageBodyMiddle>
      </MyPageContentsContainer>
    </>
  )
}
export default MyPageComment
