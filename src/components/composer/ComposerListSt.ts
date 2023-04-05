import styled from 'styled-components'

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
`

export const Ment = styled.p`
  font-family: var(--font-NotoSerifKR);
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 7rem;
`

export const Contents = styled.div`
  position: relative;
  width: 1180px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  justify-content: flex-start;
`

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 230px;
  height: 45px;
  background: #e7e8e6;
  line-height: 60px;
  font-family: var(--font-NotoSansKR-Regular);
  color: #666666;
  cursor: pointer;
  border-left: 1px solid #8b7d76;
  text-align: left;
  position: relative;

  &:first-child {
    border-left: none;
  }

  &.focused {
    background: #4b372e;
    font-weight: bold;
    color: white;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 250px;
    transform: translateX(-50%);
    width: 500px;
    height: 2px;
    background-color: #8b7d76;
  }
`

export const Desc = styled.div`
  position: absolute;
  top: 730px;
  text-align: center;
  background: #fefefe;
  width: 1180px;
  height: auto;
  min-height: 500px;
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

export const PaddingBottomDiv = styled.div`
  height: 20rem;
  background: #f5f5f5;
`

export const Inpo = styled.div`
  position: absolute;
  left: 50%;
  top: 120px;
  transform: translateX(-50%);
  text-align: center;
  background: #f6f6f6;
`

export const ComposerImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`

export const ComposerName = styled.p`
  font-family: var(--font-googleGugi);
  font-size: 1.7rem;
`
export const ComposerNameKo = styled.p`
  font-family: var(--font-NotoSerifKR);
  font-size: 1.4rem;
`

export const Describe = styled.p`
  font-size: 1rem;
  line-height: 2rem;
`

export const H3 = styled.h3`
  font-size: 1rem;
`

export const P = styled.p`
  font-size: 1rem;
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

export const ToogleWrap = styled.div`
  width: 97.3%;
`

export const ShowRepliesBtn = styled.button`
  border: none;
  background: none;
  color: var(--color-brown);
  font-size: 1rem;
  cursor: pointer;
`
