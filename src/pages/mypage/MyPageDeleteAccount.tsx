import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
} from './mypageSC'
import { MyPageContentsContainer } from './mypagecontentsSC'
import { useNavigate } from 'react-router'
import { useQuery } from 'react-query'
import { deleteAccount, showProfile } from '../../api/mypage'
import { onLogoutHandler, onRemoveToken } from '../../util/cookie'
import MyPageBody from './MyPageBody'
function MyPageDelteAccount() {
  const { isLoading: profileLoading, data: profileData } = useQuery(
    ['profile'],
    showProfile
  )

  const onDeleteAccountHandler = () => {
    if (!window.confirm('정말 회원 탈퇴를 진행하시겠습니까?')) {
      alert('취소되었습니다.')
    } else {
      alert('탈퇴했습니다.')
      onLogoutHandler('authorization')
      onRemoveToken()
      navigate('/login')
      deleteAccount()
    }
  }
  const navigate = useNavigate()

  if (profileLoading) {
    return <h1>로딩중..</h1>
  }

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
      <MyPageBody />
      <MyPageContentsContainer>
        <button onClick={onDeleteAccountHandler}>회원 탈퇴하기</button>
      </MyPageContentsContainer>
      <Footer />
    </>
  )
}

export default MyPageDelteAccount
