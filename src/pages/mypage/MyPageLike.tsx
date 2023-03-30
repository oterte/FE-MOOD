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
} from './mypageSC'
import { MyPageContentsContainer } from './mypagecontentsSC'
import MyPageBody from './MyPageBody'
import { MyPageTableContainer, MyPageTableContentTd, MyPageTableThead } from './MyPageTable'
type Like = {
  composer: string
  fileName: string
  musicId: string
  musicTitle: string
  musicUrl: string
}

function MyPageLike() {
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
        <MyPageTableContainer>
          <MyPageTableThead>
            <tr>
              <th>작곡가</th>
              <th>곡 제목</th>
              <th> 재생</th>
            </tr>
          </MyPageTableThead>
          <tbody>
            {likedata
              ? likedata.map((item) => (
                  <tr key={item.musicId}>
                    <MyPageTableContentTd>{item.composer}</MyPageTableContentTd>
                    <MyPageTableContentTd>{item.musicTitle}</MyPageTableContentTd>
                    <MyPageTableContentTd>
                      <audio controls>
                        <source src={item.musicUrl} type="audio/mpeg" />
                      </audio>
                    </MyPageTableContentTd>
                  </tr>
                ))
              : null}
          </tbody>
        </MyPageTableContainer>
      </MyPageContentsContainer>
      <Footer />
    </>
  )
}

export default MyPageLike
