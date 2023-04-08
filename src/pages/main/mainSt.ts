import styled from 'styled-components'
import shutterstock from '../../assets/images/shutterstock_411417082.jpg'
import { animated } from 'react-spring'

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
`
export const FirstContainWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${shutterstock});
`

export const StyledTitle = styled(animated.h1)`
  color: #ffffff;
  font-size: 4rem;
  font-family: var(--font-googleGugi);
`
export const Condition = styled.p`
  color: #ffffff;
  font-size: 2.5rem;
  font-family: var(--font-NotoSerifKR);
  margin-top: 5px;
  overflow: hidden;
  animation: typing 7s steps(30, end);
  white-space: nowrap;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`
export const Explain = styled.p`
  color: #ffffff;
  font-size: 1.3rem;
  line-height: 2.2rem;
  font-family: var(--font-NotoSerifKR);
`
export const MoveBtn = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid #ffffff;
  margin: 45px auto;
  color: #ffffff;
  line-height: 50px;
  font-size: 1.1rem;
  cursor: pointer;

  :hover {
    font-weight: bold;
    transition: 0.3s;
    opacity: 50%;
  }
`
export const Scroll = styled.p`
  position: absolute;
  color: #ffffff;
  font-size: 1.5rem;
  font-family: var(--font-googleGugi);
  bottom: 115px;
`
export const BgGradient = styled.div`
  width: 4000px;
  height: 2777px;
  top: 2000px;
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(75, 55, 46, 0) 0%,
    rgba(75, 55, 46, 0.9) 47.92%,
    rgba(75, 55, 46, 0) 100%
  );
  transform: rotate(127, 75deg);
  opacity: 50%;
  z-index: 1;
`

export const SecondContain = styled.div`
  position: relative;
  top: 100vh;
  background-color: #281d18;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`
export const ComposerName = styled.p`
  position: absolute;
  margin: auto;
  top: 100px;
  left: 500px;
  color: #f4f4f4;
  font-size: 80px;
  font-family: var(--font-googleGugi);
  z-index: 2;
  opacity: 50%;
`
export const ComposerImg = styled.div`
  position: absolute;
  margin: auto;
  top: 260px;
  left: 460px;
  width: 445px;
  height: 445px;
  border-radius: 50%;
  z-index: 2;
`
export const ComposerImgFile = styled.img`
  width: 445px;
  height: 445px;
  border-radius: 50%;
`
export const ComposerNameKr = styled.p`
  position: absolute;
  margin: auto;
  top: 380px;
  left: 850px;
  width: 100%;
  font-size: 2rem;
  color: #ffffff;
  font-family: var(--font-NotoSerifKR);
  z-index: 2;
`
export const ComposerDesc = styled.p`
  position: absolute;
  top: 450px;
  left: 850px;
  width: 665px;
  line-height: 32px;
  font-size: 1.1rem;
  color: #ffffff;
  z-index: 2;
`
export const RepresentativeSong = styled.div`
  position: absolute;
  top: 820px;
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.1rem;
`
export const Hr = styled.hr`
  width: 20%;
  height: 0.3px;
  border: none;
  background: white;
  padding: 0;
  background: #b0b0b0;
`

export const Songs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SongsDiv = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #736b62;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dbdbdb;
  margin-top: 900px;
  margin-right: 1rem;
  font-weight: bold;
  font-family: var(--font-NotoSerifKR);
`

export const MoveRecommendPage = styled.button`
  width: 110px;
  height: 110px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  z-index: 1;
  position: fixed;
  bottom: 100px;
  right: 5rem;
  background: none;
  color: white;
  font-size: 1rem;
  line-height: 1.4rem;

  z-index: 2;

  :hover {
    border: 5px solid #918d7e;
    font-weight: 900;
    transition: 0.3s;
    opacity: 50%;
  }
`

export const ScrollBtn = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 80px;
  width: 10px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 5px;
`

export const ScrollMove = styled.button`
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: white;
  border-radius: 5px;
  transition: top 0.3s ease-out;
  border:none;
`
