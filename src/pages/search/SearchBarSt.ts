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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ComposerImg = styled.img`
  margin-right: 600px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
`
export const ComposerName = styled.p`
  margin-top: -220px;
  margin-left: -50px;
  text-align: left;
  font-size: 2rem;
  font-family: var(--font-googleGugi);
`
export const Fullname = styled.p`
  margin-top: -20px;
  margin-left: 80px;
  font-size: 1.2rem;
  font-family: var(--font-NotoSerifKR);
`
export const ComposerDesc = styled.p`
  margin-top: 10px;
  margin-left: 410px;
  font-size: 1rem;
  max-width: 600px;
`
export const List = styled.div`
  position: absolute;
  top: 550px;
  text-align: center;
  background: #FEFEFE;
  width: 1180px;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    font-size: 1rem;
    padding:1rem;

  &:first-child {
    background-color: #4B372E;
    color: white;
  }
    
  & > div:last-child {
    border-bottom: none;
  }
`
