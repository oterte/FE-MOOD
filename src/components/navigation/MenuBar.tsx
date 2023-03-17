import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
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
          <Link to="/login">
            <LoginBtn>로그인</LoginBtn>
          </Link>
          <Link to="/composer">
            <ComposerBtn>작곡가별 음악 추천받기</ComposerBtn>
          </Link>
          <Link to="/survey">
            <ComposerBtn>기분에 따라 노래 추천받기</ComposerBtn>
          </Link>

          <ComposerBtn>채팅하러 가기</ComposerBtn>
          <LogoutBtn>로그아웃</LogoutBtn>
        </MenuItem>
      </MenuItems>
    </MenuWrapper>
  )
}

export default MenuBar
