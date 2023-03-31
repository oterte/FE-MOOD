import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    width: 0;
  }
  to {
    width: 300px;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`

export const SearchButton = styled.button`
  font-size: 16px;
  padding: 10px;
  background: none;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`

export const SearchInput = styled.div`
  height: 0;
  overflow: hidden;
  position: relative; // input이 확장될 때, 다른 요소와 겹치지 않도록 함

  input {
    width: 0;
    height: 30px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    background-color: #f2f2f2;
    margin-right: 10px;
    transition: width 1s;
  }

  &.show {
    height: auto;
    overflow: visible;

    input {
      width: 280px;
      animation: ${fadeIn} 0.7s;
      // transition: width 1s;
    }
  }
`

export const CloseButton = styled.button`
  font-size: 16px;
  padding: 10px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`
export const Inpo = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`

export const ComposerImg = styled.img`
  position: absolute;
  top: 90px;
  left: 500px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
`
export const ComposerName = styled.p`
  position: absolute;
  top: 80px;
  left: 800px;
  font-size: 2rem;
  font-family: var(--font-googleGugi);
`
export const Fullname = styled.p`
  position: absolute;
  top: 150px;
  left: 800px;
  font-size: 1.2rem;
  font-family: var(--font-NotoSerifKR);
`
export const ComposerDesc = styled.p`
  position: absolute;
  top: 200px;
  left: 800px;
  font-size: 1rem;
  max-width: 600px;
`
