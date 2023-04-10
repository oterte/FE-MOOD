import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
import menu1 from '../../assets/icons/menu_01.png'
import menu2 from '../../assets/icons/menu_02.png'
import menu3 from '../../assets/icons/menu_03.png'
import menu4 from '../../assets/icons/menu_04.png'
import menubtn from '../../assets/icons/menu_black.png'
import closebtn from '../../assets/icons/xmark_black.png'
import baseProifle from '../../assets/icons/Heart_fill_white copy.png'

type Props = {
  items: string[]
}

const MenuBar: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const onLogout = () => {
    onRemoveToken()
    onLogoutHandler('authorization')
  }
  const nickname = onGetLocalStorage('nickname')
  return (
    <MenuWrapper isOpen={isOpen}>
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu}>
        <img src={isOpen ? closebtn : menubtn} alt="menu_toggle" />
      </HamburgerButton>
      <MenuItems isOpen={isOpen}>
        <MenuItem>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <H1>MOOD</H1>
          </Link>
          <ProfileImg src={baseProifle}></ProfileImg>
          {nickname ? (
            <LoginMent>
              {nickname}님<br />
              환영합니다.
            </LoginMent>
          ) : (
            <LoginMent>로그인 해주세요.</LoginMent>
          )}
          {!onGetLocalStorage('accessToken') ? (
            <Link to="/login">
              <LoginBtn>로그인</LoginBtn>
            </Link>
          ) : null}
          {onGetLocalStorage('accessToken') ? (
            <Link to="/mypage">
              <LoginBtn>마이페이지 바로 가기</LoginBtn>
            </Link>
          ) : null}
          <Link to="/recommend">
            <RecommendBtn>
              <img src={menu1} alt="recommend" />
              기분에 따라 노래 추천받기
            </RecommendBtn>
          </Link>

          <Link to="/composer">
            <ComposerBtn>
              <img src={menu2} alt="composer" />
              작곡가별 음악 추천받기
            </ComposerBtn>
          </Link>

          <Link to="/survey">
            <SurveyBtn>
              <img src={menu3} alt="survey" />내 기분 상태 체크하기
            </SurveyBtn>
          </Link>

          <Link to="/selectroom">
            <ChatBtn>
              <img src={menu4} alt="selectroom" />
              채팅하러 가기
            </ChatBtn>
          </Link>

          {onGetLocalStorage('accessToken') ? (
            <LogoutBtn onClick={onLogout}>로그아웃</LogoutBtn>
          ) : null}
        </MenuItem>
      </MenuItems>
    </MenuWrapper>
  )
}

export default MenuBar
