import { WriteDate } from './../musicDetail/MusicDetailSt'
import styled from 'styled-components'

export const MyPageBodyTop = styled.div`
  width: 1259px;
  height: 70px;
  background-color: #8b7d76;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MyPageBodyDiv = styled.div`
  width: 33%;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--font-NotoSansKR-Regular);
  line-height: 29px;
  text-align: center;
  color: #000000;
`
export const MyPageBodyMiddle = styled.div`
  width: 1259px;
  height: 100%;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  text-align: center;
`
export const MyPageBodyMiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const MyPageBodyMiddleDiv = styled.div`
  width: 33%;
  height:60px;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--font-NotoSansKR-Regular);
  line-height: 60px;
  text-align: center;
  color: #000000;
  border-bottom: 1px solid #d9d9d9;
`
export const MyPageMiddleDivCursor = styled.div`
  width: 33%;
  line-height: 60px;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--font-NotoSansKR-Regular);
  text-align: center;
  color: #000000;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
`
export const MyPageLikeTopFirst = styled.div`
  width: 10%;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--font-NotoSansKR-Regular);
  line-height: 29px;
  text-align: center;
  color: #000000;
`
export const MyPageLikeTopSec = styled.div`
  width: 40%;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--font-NotoSansKR-Regular);
  line-height: 29px;
  text-align: center;
  color: #000000;
`
export const MyPageLikeTopRest = styled.div`
  width: 15%;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--font-NotoSansKR-Regular);
  line-height: 29px;
  text-align: center;
  color: #000000;
`
export const MyPageLikeLast = styled.div`
  width: 20%;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--font-NotoSansKR-Regular);
  line-height: 29px;
  text-align: center;
  color: #000000;
`

export const MyPageLikeMiddleContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height:60px;
`
export const MyPageLikeDescDiv = styled.div`
  width: 1259px;
  height: 240px;
  background-color: #fefefe;
  border: 1px solid #d9d9d9;
`

export const MyPageLikeMiddleDiv = styled.div`
  width: 25%;
  height: 60px;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--font-NotoSansKR-Regular);
  text-align: center;
  color: #000000;
  border-bottom: 1px solid #d9d9d9;
`

export const MyPageLikeMiddleOne = styled.div`
  width: 10%;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--font-NotoSansKR-Regular);
  text-align: center;
  color: #000000;
  border-bottom: 1px solid #d9d9d9;
`
export const MyPageLikeMiddleTwo = styled.div`
  width: 40%;
  font-style: normal;
  font-size: 12px;
  font-weight: 400;
  font-family: var(--font-NotoSansKR-Regular);
  text-align: center;
  color: #000000;
  border-bottom: 1px solid #d9d9d9;
`
export const MyPageLikeMiddleThree = styled.div`
  width: 15%;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--font-NotoSansKR-Regular);
  text-align: center;
  color: #000000;
  border-bottom: 1px solid #d9d9d9;
`

export const MyPageLikeMiddleFour = styled.div`
  width: 20%;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  font-family: var(--font-NotoSansKR-Regular);
  text-align: center;
  color: #000000;
  border-bottom: 1px solid #d9d9d9;
`
export const MyPageLikeScrapBtn = styled.img`
  width: 25px;
  cursor: pointer;
`
export const MyPageLikeMoreBtn = styled.button`
 border: none;
  background: none;
  color: var(--color-brown);
  font-size: 1rem;
  cursor: pointer;
`
export const MyPageContainer = styled.div`
  top: 730px;
  text-align: center;
  background: #fefefe;
  width: 1200px;
  height: auto;
  text-align: center;
  padding-bottom: 20rem;
  margin:auto;
  margin-top: 20px;

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