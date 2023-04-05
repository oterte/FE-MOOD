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
  padding: 10px;
  background: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #2e2e2e;
`

export const SearchInput = styled.div`
  height: 0;
  overflow: hidden;
  position: relative;

  input {
    width: 0;
    height: 30px;
    border: 2px solid #6e6e6e;
    border-radius: 30px;
    padding: 5px;
    font-size: 16px;
    background-color: white;
    margin-right: 10px;
    transition: width 1s;
  }

  &.show {
    height: auto;
    overflow: visible;

    input {
      width: 300px;
      animation: ${fadeIn} 0.7s;
      box-shadow: 10px 10px 5px -6px rgba(133, 110, 99, 0.18);
      -webkit-box-shadow: 10px 10px 5px -6px rgba(133, 110, 99, 0.18);
      -moz-box-shadow: 10px 10px 5px -6px rgba(133, 110, 99, 0.18);
    }
  }
`

export const CloseButton = styled.button`
  padding: 10px;
  background: none;
  color: #2e2e2e;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
`

export const Term = styled.p`
  font-size: 1.2rem;
  font-family: var(--font-NotoSerifKR);
  margin-top: -2rem;
  margin-bottom: 5rem;
`

export const Line = styled.hr`
  width: 100%;
  height: 1.5px;
  background: #cfcfcf;
  border: none;
  margin-bottom: 6rem;
`

export const Inpo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  margin-bottom: 7rem;
`

export const ComposerImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-right: 5rem;
`

export const ComposerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const ComposerName = styled.p`
  margin-top: 0;
  font-size: 2rem;
  font-family: var(--font-googleGugi);
  margin-left: 0;
`

export const Fullname = styled.p`
  margin-top: -20px;
  margin-left: 0;
  font-size: 1.2rem;
  font-family: var(--font-NotoSerifKR);
`

export const ComposerDesc = styled.p`
  margin-top: 10px;
  margin-left: 0;
  font-size: 1rem;
  max-width: 600px;
`
export const ShowRepliesBtn = styled.button`
  border: none;
  background: none;
  color: var(--color-brown);
  font-size: 1rem;
  cursor: pointer;
`

export const List = styled.div`
  position: relative;
  text-align: center;
  background: #fefefe;
  width: 1180px;
  height: auto;
  margin-bottom: 20rem;
  text-align: center;

  & > div {
    display: grid;
    grid-template-columns: 1fr 5fr repeat(2, 1fr) 1fr;
    align-items: center;
    border-bottom: 1px solid #ddd;
    font-size: 1rem;
    padding: 1rem;

    img {
      width: 23px;
      cursor: pointer;
    }

    button {
      border: none;
      background: none;
    }

    &:first-child {
      background-color: #4b372e;
      color: white;
    }

    & > div:last-child {
      border-bottom: none;
    }

    & > div:nth-child(3) {
      text-align: left;
      justify-self: start;
    }

    & > div:not(:nth-child(2)) {
      justify-self: center;
    }
  }
`

export const ToogleWrap = styled.div`
  width: 97.3%;
`

export const ContentContainer = styled.div`
  position: relative;
  width: 900px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-break: break-word;
  text-align: left;
  padding: 5rem;
`
export const MusicDetailBtn = styled.span`
  position: absolute;
  bottom: 35px;
  left: 110px;
  font-size: 1rem;
  border: 2px solid #ded6d3;
  color: #4b372e;
  border-radius: 20px;
  font-weight: bold;
  width: 160px;
  height: 35px;
  cursor: pointer;
  text-align: center;
  line-height: 34px;

  :hover {
    background: #73615a;
    color: white;
    transition: 0.3s;
  }
`

export const SpanMusicTitle = styled.span`
  position: absolute;
  top: 35px;
  left: 110px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 2rem;
`

export const SpanMusicContent = styled.span`
  position: absolute;
  top: 85px;
  left: 110px;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`
