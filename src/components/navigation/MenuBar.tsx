import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  onGetLocalStorage,
  onLogoutHandler,
  onRemoveToken,
} from '../../util/cookie'
import {
  ChatBtn,
  H1,
  LoginMent,
  ProfileImg,
  RecommendBtn,
  SurveyBtn,
} from '../navigation/MenuBarSt'
import {
  ComposerBtn,
  HamburgerButton,
  LoginBtn,
  LogoutBtn,
  MenuItem,
  MenuItems,
  MenuWrapper,
} from './MenuBarSt'

type Props = {
  items: string[]
}

const MenuBar: React.FC<Props> = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const onLogout = () => {
    onRemoveToken()
    onLogoutHandler('authorization')
    navigate('/')
  }
  return (
    <MenuWrapper isOpen={isOpen}>
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </HamburgerButton>
      <MenuItems isOpen={isOpen}>
        <MenuItem>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <H1>MOOD</H1>
          </Link>
          <ProfileImg></ProfileImg>
          <LoginMent>"__"님 어서오세요.</LoginMent>
          {!onGetLocalStorage('authorization') ? (
            <Link to="/login">
              <LoginBtn>로그인</LoginBtn>
            </Link>
          ) : null}
          {onGetLocalStorage('authorization') ? (
            <Link to="/mypage">
              <LoginBtn>마이페이지 바로 가기</LoginBtn>
            </Link>
          ) : null}
          <Link to="/recommend">
            <RecommendBtn>기분에 따라 노래 추천받기</RecommendBtn>
          </Link>

          <Link to="/composer">
            <ComposerBtn>작곡가별 음악 추천받기</ComposerBtn>
          </Link>

          <Link to="/survey">
            <SurveyBtn>내 기분 상태 체크하기</SurveyBtn>
          </Link>

          <Link to="/selectroom">
            <ChatBtn>채팅하러 가기</ChatBtn>
          </Link>

          {onGetLocalStorage('authorization') ? (
            <LogoutBtn onClick={onLogout}>로그아웃</LogoutBtn>
          ) : null}
        </MenuItem>
      </MenuItems>
    </MenuWrapper>
  )
}

export default MenuBar
