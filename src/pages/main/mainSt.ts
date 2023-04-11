import styled, { keyframes } from 'styled-components'
import shutterstock from '../../assets/images/shutterstock_411417082.jpg'

export const Wrap = styled.div`
  width: 100%;
  height: auto;
  overflow-x: hidden;
`
export const FirstContainWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${shutterstock});
`

export const titleAnimation = keyframes`
0% {
  transform: translateY(-100px);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`

export const StyledTitle = styled.p`
  color: #ffffff;
  font-size: 4rem;
  font-family: var(--font-googleGugi);
  animation: ${titleAnimation} 1s ease-in-out forwards;
  animation-delay: 0.5s;
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
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SecondContain = styled.div`
  position: relative;
  background-color: #281d18;
  width: 100%;
  height: 100vh;
`

export const Left = styled.div`
  position: absolute;
  width: 70%;
  left: 16%;

  p {
    position: absolute;
    left: 25%;
    z-index: 9;
  }
`

export const Right = styled.div`
  position: absolute;
  width: 70%;
  height:100%;
  text-align: right;
  right: 0;

  p {
    position: absolute;
    right: 62%;
    z-index: 9;
  }

  img {
    position: absolute;
    left: 120%;
  }
`

export const ComposerName = styled.p`
  position: absolute;
  top: 150px;
  color: #f4f4f4;
  font-size: 80px;
  font-family: var(--font-googleGugi);
  z-index: 2;
  opacity: 50%;
  white-space: nowrap;
`

export const ComposerImg = styled.div`
  position: absolute;
  top: 160px;
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
  top: 360px;
  width: 100%;
  font-size: 2rem;
  color: #ffffff;
  font-family: var(--font-NotoSerifKR);
  z-index: 2;
`

export const ComposerDesc = styled.p`
  position: absolute;
  top: 450px;
  width: 665px;
  line-height: 32px;
  font-size: 1.1rem;
  color: #ffffff;
  z-index: 2;
`

export const RepresentativeSong = styled.div`
  position: absolute;
  top: 800px;
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
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #736b62;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dbdbdb;
  margin-top: 890px;
  margin-right: 1rem;
  font-weight: bold;
  font-family: var(--font-NotoSerifKR);
  text-align: center;
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
  right: -30px;
  width: 2px;
  height: 330px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    position: absolute;
    color: white;
    font-family: var(--font-NotoSerifKR);
    margin-right: 18px;
    right: 10px;
    text-align: right;
  }
`

export const Border = styled.div`
  position: absolute;
  right: -250px;
  width: 340px;
  height: 340px;
  border: 2px solid white;
  border-radius: 50%;
  opacity: 50%;
`

export const ScrollMove = styled.button`
  position: absolute;
  top: 60px;
  right: 55px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #c9c5b9;
  transition: top 0.3s ease-out;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const ScrollMove2 = styled.button`
  position: absolute;
  top: 110px;
  right: 80px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #c9c5b9;
  transition: top 0.3s ease-out;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const ScrollMove3 = styled.button`
  position: absolute;
  top: 160px;
  right: 87px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #c9c5b9;
  transition: top 0.3s ease-out;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const ScrollMove4 = styled.button`
  position: absolute;
  top: 210px;
  right: 78px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #c9c5b9;
  transition: top 0.3s ease-out;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const ScrollMove5 = styled.button`
  position: absolute;
  top: 260px;
  right: 55px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #c9c5b9;
  transition: top 0.3s ease-out;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`
