import React from 'react'
import Header from '../../components/header/Header'
import {
  MyPageProfileBodyContainer,
  MyPageProfileContainer,
  MyPageProfileImg,
  MyPageProfileImgBox,
} from './mypageSC'
import {
  MyPageContentsContainer,
  MyPageDeleteTab,
  MyPageTab,
  MyPageTabItem,
  MyPageTabItemLast,
} from './mypagecontentsSC'
import Play from '../../components/playbar/Play'
import { useNavigate } from 'react-router'
import { useQuery } from 'react-query'
import { deleteAccount, showProfile } from '../../api/mypage'
import { onLogoutHandler, onRemoveToken } from '../../util/cookie'
import MyPageBody from './MyPageBody'
import { useDispatch } from 'react-redux'
import { setMusicPlay } from '../../redux/modules/musicPlayer'
import { setIsPlaying } from '../../redux/modules/isPlaying'
function MyPageDelteAccount() {
  const { isLoading: profileLoading, data: profileData } = useQuery(
    ['profile'],
    showProfile
  )
  const dispatch = useDispatch()
  const onClickMusicChangeHandler = (music: any) => {
    dispatch(setMusicPlay(music))
    dispatch(setIsPlaying())
  }

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
          프로필 사진 변경
        </MyPageTabItem>
        <MyPageDeleteTab
          onClick={() => {
            navigate('/mypageDeleteaccount')
          }}
        >
          회원 탈퇴
        </MyPageDeleteTab>
      </MyPageTab>
      <MyPageContentsContainer>
        <button onClick={onDeleteAccountHandler}>회원 탈퇴하기</button>
      </MyPageContentsContainer>
      <Play/>
      <div>123123123</div>
    </>
  )
}

export default MyPageDelteAccount
