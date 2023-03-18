import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import {
  MyPageContentCommentContainer,
  MyPageContentMusicContainer,
  MyPageContentsContainer,
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
  MyPageProfileImgContainer,
} from './mypageSC'

function MyPage() {
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
      <MyPageContentsContainer>
        <MyPageContentCommentContainer>
          <div>
            <span>저장된 음악 보기</span>
          </div>
          <div>
            <ul>
              <li>
                <span>음악 제목 1</span>
              </li>
              <li>
                <span>음악 제목 2</span>
              </li>
              <li>
                <span>음악 제목 3</span>
              </li>
            </ul>
          </div>
        </MyPageContentCommentContainer>
        <MyPageContentMusicContainer>
          <div>
            <span>저장된 음악 보기</span>
          </div>
          <div>
            <ul>
              <li>
                <span>음악 제목 1</span>
              </li>
              <li>
                <span>음악 제목 2</span>
              </li>
              <li>
                <span>음악 제목 3</span>
              </li>
            </ul>
          </div>
        </MyPageContentMusicContainer>
      </MyPageContentsContainer>
      <Footer />
    </>
  )
}

export default MyPage
