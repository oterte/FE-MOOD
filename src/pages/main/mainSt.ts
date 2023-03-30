import styled from 'styled-components'

export const MoveRecommendPageP = styled.span`
  font-size: 13px;
  color: #ffffff;
`
export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`
export const FirstContainWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 1080px;
  text-align: center;
  background-color: #4b372e;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const Title = styled.p`
  color: #ffffff;
  font-size: 52px;
  font-family: var(--font-googleGugi);
`
export const Condition = styled.p`
  color: #ffffff;
  font-size: 40px;
  font-family: var(--font-NotoSerifKR);
`
export const Explain = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: var(--font-NotoSerifKR);
`
export const MoveBtn = styled.div`
  width: 180px;
  height: 45px;
  border: 1px solid #ffffff;
  margin: 45px auto;
  color: #ffffff;
  line-height: 45px;
  cursor: pointer;
`
export const Scroll = styled.p`
  position: absolute;
  color: #ffffff;
  font-size: 20px;
  font-family: var(--font-googleGugi);
  bottom: 115px;
`
export const BgGradient = styled.div`
  width: 4000px;
  height: 2777px;
  top: 2000px;
  position: absolute;
  /* background-color: black; */
  background: linear-gradient(
    180deg,
    rgba(75, 55, 46, 0) 0%,
    rgba(75, 55, 46, 0.9) 47.92%,
    rgba(75, 55, 46, 0) 100%
  );
  transform: rotate(127, 75deg);
  z-index: 1;
`

export const SecondContain = styled.div`
  position: relative;
  top: 1080px;
  background-color: #281d18;
  width: 100%;
  height: 1080px;
  box-sizing: border-box;
`
export const ComposerName = styled.p`
  position: absolute;
  margin: auto;
  top: 84px;
  left: 558px;
  color: #f4f4f4;
  font-size: 80px;
  font-family: var(--font-googleGugi);
  z-index: 2;
`
export const ComposerImg = styled.div`
  position: absolute;
  margin: auto;
  top: 246px;
  left: 518px;
  width: 445px;
  height: 445px;
  background-color: #8b7d76;
  border-radius: 50%;
  z-index: 2;
`
export const ComposerNameKr = styled.p`
  position: absolute;
  margin: auto;
  top: 469px;
  left: 859px;
  width: 405px;
  font-size: 32px;
  color: #ffffff;
  font-family: var(--font-NotoSerifKR);
  z-index: 2;
`
export const ComposerDesc = styled.p`
  position: absolute;
  top: 552px;
  left: 859px;
  width: 665px;
  line-height: 32px;
  color: #ffffff;
  z-index: 2;
`
export const RepresentativeSong = styled.div`
  position: absolute;
  top: 775px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`
export const Hr = styled.hr`
  width: 530px;
  z-index: 2;
`
export const RepresentativeSongP = styled.p`
  color: #ffffff;
  font-size: 20px;
  z-index: 2;
`
export const Songs = styled.div`
  position: absolute;
  top: 852px;
  left: 690px;
  display: flex;
  width: 540px;
  justify-content: space-evenly;
  z-index: 2;
`

// export const SongsDiv = styled.div<{bgColor: string}>`
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   background-color: ${(props) => props.bgColor};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #ffffff;
// `

export const SongsDiv = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-align: center;
  z-index: 2;
`

export const MoveRecommendPage = styled.div`
  width: 90px;
  height: 90px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  z-index: 1;
  position: fixed;
  bottom: 200px;
  right: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
`
