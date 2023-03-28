import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  onGetLocalStorage,
  onLogoutHandler,
  onRemoveToken,
} from '../../util/cookie'
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
    <MenuWrapper>
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </HamburgerButton>
      <MenuItems isOpen={isOpen}>
        <MenuItem>
          {!onGetLocalStorage('authorization') ? (
            <Link to="/login">
              <LoginBtn>로그인</LoginBtn>
            </Link>
          ) : null}
           {onGetLocalStorage('authorization') ? (
            <Link to="/mypage">
              <LoginBtn>마이페이지</LoginBtn>
            </Link>
          ) : null}
          <Link to="/recommend">
            <ComposerBtn>기분에 따라 노래 추천받기</ComposerBtn>
          </Link>

          <Link to="/composer">
            <ComposerBtn>작곡가별 음악 추천받기</ComposerBtn>
          </Link>

          <Link to="/survey">
            <ComposerBtn>내 기분 상태 체크하기</ComposerBtn>
          </Link>

          <Link to="/selectroom">
            <ComposerBtn>채팅하러 가기</ComposerBtn>
          </Link>
            
          {
            onGetLocalStorage('authorization') ?
            <LogoutBtn onClick={onLogout}>로그아웃</LogoutBtn>
            : null
          }
        </MenuItem>
      </MenuItems>
    </MenuWrapper>
  )
}

export default MenuBar
