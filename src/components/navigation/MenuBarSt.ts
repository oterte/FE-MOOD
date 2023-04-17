import styled from 'styled-components'

export const MenuWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  height: 100%;
  z-index: 1;
  min-width: 300;

  ${({ isOpen }) =>
    isOpen &&
    `
      &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 0;
      }
  `}
`

export const MenuItem = styled.li`
  position: relative;
`

export const HamburgerButton = styled.button<{ isOpen: boolean }>`
  position: ${({ isOpen }) => (isOpen ? 'fixed' : 'absolute')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  z-index: 100;

  img {
    width: 100%;
    transition: all 0.1s linear;
    position: relative;
    top: -10px;
    left: 50px;
    z-index: 100;
  }
`

export const MenuItems = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  top: 0px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 30%;
  max-width: 400px;
  min-width: 330px;
  height: 100%;
  background: #ffffff;
  list-style-type: none;
  padding: 0;
  margin: 0;
  transition: left 0.5s ease;
  z-index: 0;
`
export const H1 = styled.h1`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0%);
  color: black;
  font-family: var(--font-googleGugi);
  font-size: 1.5rem;
`
export const ProfileImg = styled.img`
  position: absolute;
  top: 190px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 70px;
  height: 70px;
  background: gray;
  border-radius: 50%;
`
export const LoginMent = styled.p`
  position: absolute;
  top: 270px;
  left: 50%;
  transform: translate(-50%, 0%);
  font-family: var(--font-NotoSerifKR);
  font-size: 1.15rem;
  width: 100%;
  text-align: center;
  line-height: 30px;
`

export const LoginBtn = styled.button`
  position: absolute;
  top: 370px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 192px;
  height: 45px;
  cursor: pointer;
  border: none;
  background: #4b372e;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  font-family: var(--font-NotoSansKR-Thin);
  color: white;
  text-align: center;
`

export const MainBtn = styled.button<{ active?: boolean }>`
  position: absolute;
  top: 480px;
  width: 100%;
  height: 70px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 18px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    position: absolute;
    left: 10%;
    width: 40px;
  }

  p {
    position: absolute;
    left: 22%;
    top: 9px;
  }

  ${({ active }) =>
    active &&
    `
    background-color: #b3a69f;
    color: white;
    font-weight: 900;
    width:100%;
    height: 70px;
  `}
`

export const RecommendBtn = styled.button<{ active?: boolean }>`
  position: absolute;
  top: 550px;
  width: 100%;
  height: 70px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 18px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    position: absolute;
    left: 10%;
    width: 40px;
  }

  p {
    position: absolute;
    left: 22%;
    top: 9px;
  }

  ${({ active }) =>
    active &&
    `
    background-color: #b3a69f;
    color: white;
    font-weight: 900;
    width:100%;
    height: 70px;
  `}
`

export const ComposerBtn = styled.button<{ active?: boolean }>`
  position: absolute;
  top: 620px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
  height: 70px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 32px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    position: absolute;
    left: 10%;
    width: 35px;
  }

  p {
    position: absolute;
    left: 22%;
    top: 9px;
  }

  ${({ active }) =>
    active &&
    `
    background-color: #b3a69f;
    color: white;
    font-weight: 900;
    width:100%;
    height: 70px;
  `}
`
export const SurveyBtn = styled.button<{ active?: boolean }>`
  position: absolute;
  top: 690px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
  height: 70px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 50px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    position: absolute;
    left: 10%;
    width: 38px;
  }

  p {
    position: absolute;
    left: 22%;
    top: 9px;
  }

  ${({ active }) =>
    active &&
    `
    background-color: #b3a69f;
    color: white;
    font-weight: 900;
    width:100%;
    height: 70px;
  `}
`
export const ChatBtn = styled.button<{ active?: boolean }>`
  position: absolute;
  top: 760px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
  height: 70px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 100px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    position: absolute;
    left: 10%;
    width: 33px;
  }

  p {
    position: absolute;
    left: 22%;
    top: 9px;
  }

  ${({ active }) =>
    active &&
    `
    background-color: #b3a69f;
    color: white;
    font-weight: 900;
    width:100%;
    height: 70px;
  `}
`
export const LogoutBtn = styled.button`
  width: 280px;
  height: 30px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: right;
  font-size: 1.1rem;
  margin-top: 870px;
  margin-left: 70px;
  color: #888888;
`
