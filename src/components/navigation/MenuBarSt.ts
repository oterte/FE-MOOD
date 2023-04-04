import styled from 'styled-components'

export const MenuWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  height: 100%;
  z-index: 1;

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
  position: ${({ isOpen }) => (isOpen ? 'fixed' : 'relative')};
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
    left: 50px;
    z-index: 100;
  }
`

export const MenuItems = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  top: 0px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 400px;
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
  font-size: 1.2rem;
`

export const LoginBtn = styled.button`
  position: absolute;
  top: 340px;
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

export const RecommendBtn = styled.button`
  position: absolute;
  top: 450px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 280px;
  height: 70px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: bold;
  border-top: 3px solid #8b7d76;
  border-bottom: 1px solid #8b7d76;
  font-family: var(--font-NotoSansKR-Thin);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 18px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 40px;
    margin-right: 5px;
  }
`

export const ComposerBtn = styled.button`
  position: absolute;
  top: 520px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 280px;
  height: 70px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: bold;
  border-bottom: 1px solid #8b7d76;
  font-family: var(--font-NotoSansKR-Thin);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 32px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 32px;
    margin-right: 10px;
  }
`
export const SurveyBtn = styled.button`
  position: absolute;
  top: 590px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 280px;
  height: 70px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: bold;
  border-bottom: 1px solid #8b7d76;
  font-family: var(--font-NotoSansKR-Thin);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 50px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 36px;
    margin-right: 10px;
  }
`
export const ChatBtn = styled.button`
  position: absolute;
  top: 660px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 280px;
  height: 70px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: bold;
  border-bottom: 3px solid #8b7d76;
  font-family: var(--font-NotoSansKR-Thin);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 100px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 32px;
    margin-right: 15px;
  }
`
export const LogoutBtn = styled.button`
  width: 280px;
  height: 30px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: right;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 760px;
  margin-left: 70px;
  font-family: var(--font-NotoSansKR-Thin);
  color: #888888;
`
