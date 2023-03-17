import styled from 'styled-components'

export const MenuWrapper = styled.div`
  position: relative;
  height: 100%;
  z-index: 1;
`

export const HamburgerButton = styled.button<{ isOpen: boolean }>`
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

  span {
    width: 100%;
    height: 2px;
    background-color: black;
    transition: all 0.1s linear;
    position: relative;
    left: 50px;
    transform-origin: 1px;
    z-index: 100;

    &:first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(28deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    }

    &:last-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-28deg)' : 'rotate(0)')};
    }
  }
`

export const MenuItems = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  top: 20px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 360px;
  height: 100%;
  background: #ffffff;
  border-right: 1px solid black;
  list-style-type: none;
  padding: 0;
  margin: 0;
  transition: left 0.3s ease;
  z-index: 0;
`

export const ComposerBtn = styled.button`
  width: 280px;
  height: 60px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
`

export const LoginBtn = styled.button`
  width: 280px;
  height: 30px;
  cursor: pointer;
  border: none;
  margin-bottom: 20px;
  background: none;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
`
export const LogoutBtn = styled.button`
  width: 280px;
  height: 30px;
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 600px;
`

export const MenuItem = styled.li`
  margin-top: 100px;
  padding: 1rem;
`
