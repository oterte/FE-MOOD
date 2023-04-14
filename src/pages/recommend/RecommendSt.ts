import styled from 'styled-components'

export const Wrap = styled.div`
  width: 100%;
  height: auto;
`
export const StDivWrap = styled.div`
  width: 65%;
  margin: 0px auto 13rem auto;
`
export const StDivTitle = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`
export const StPTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  font-family: var(--font-NotoSerifKR);
`
export const StPExplain = styled.p`
  font-size: 20px;
  color: #888888;
`

export const StDivLike = styled.div`
  width: 25px;
  height: 25px;
  margin: 42px 42px 0px auto;
`
export const StDivComposerImg = styled.div`
  width: 180px;
  height: 180px;
  margin: 30px auto 0px auto;
  line-height: 180px;
`
export const ComposerImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: rgba(75, 55, 46, 0.5);
`
export const StPVigor = styled.p`
  font-size: 25px;
  width: 100%;
  margin: 30px auto 0px auto;
  text-align: center;
`
export const StDivXcoordinate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StPDepress = styled.p`
  width: 100px;
  margin: 0px auto 0px 38px;
`
export const StPPositive = styled.p`
  width: 100px;
  margin-right: 38px;
`
export const StPCalm = styled.p`
  width: 100%;
  text-align: center;
  margin: 0px auto 38px auto;
`
export const Circle1 = styled.div`
  width: 160px;
  height: 160px;
  border: 50%;
  border-radius: 50%;
  position: absolute;
  left: 60%;
  top: 200px;
  background-color: rgba(75, 55, 46, 0.5);
`
export const Circle2 = styled.div`
  width: 130px;
  height: 130px;
  border: 50%;
  border-radius: 50%;
  position: absolute;
  left: 70%;
  top: 300px;
  background-color: rgba(139, 125, 118, 0.4);
`
export const Circle3 = styled.div`
  width: 80px;
  height: 80px;
  border: 50%;
  border-radius: 50%;
  position: absolute;
  top: 200px;
  left: 100px;
  background-color: rgba(139, 125, 118, 0.4);
`
export const Circle4 = styled.div`
  width: 100px;
  height: 100px;
  border: 50%;
  border-radius: 50%;
  position: absolute;
  top: 500px;
  left: 300px;
  background-color: rgba(139, 125, 118, 0.4);
`
export const StDivMoodWrap = styled.div`
  width: 100%;
  min-width: 600px;
  height: 700px;
  border: 1px solid #d6d6d6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  font-family: var(--font-NotoSerifKR);
  font-size: 25px;
  background-color: #ffffff;
`
export const CenterContain = styled.div`
  @media screen and (max-width: 1530px) {
    flex-direction: column;
    width: 100%;
    margin: auto;
  }
  width: 600px;
  display: flex;
  text-align: center;
  flex-direction: row;
`
export const MusicPlayWrap = styled.div`
  @media screen and (max-width: 1530px) {
    width: 600px;
    margin: auto;
  }
  width: 100%;
`
export const StDIvMusicPlayer = styled.div`
  width: 100%;
  height: 582px;
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  background-color: #ffffff;
`
export const DivChartWrap = styled.div`
  margin-left: auto;
  width: 50%;
  @media screen and (max-width: 1530px) {
    margin: auto;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
export const CenterExplain = styled.p`
  width: 500px;
  margin: 40px 0px;
  font-size: 25px;
  font-family: var(--font-NotoSerifKR);
`
export const ClickBox = styled.p`
  font-size: 25px;
  margin: 80px auto;
  font-family: var(--font-NotoSerifKR);
`
export const MusicContain = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
`
export const StPMusicTitle = styled.p`
  width: 480px;
  font-size: 20px;
  margin: 22px auto 5px auto;
`
export const StPMusicComposer = styled.p`
  width: 100px;
  color: #616161;
  margin: auto;
`
export const LikeMusic = styled.p`
  font-size: 20px;
  margin-top: 48px;
  font-family: var(--font-NotoSerifKR);
`
export const MoveDetail = styled.div`
  width: 170px;
  height: 44px;
  margin: 23px auto;
  color: #ffffff;
  background-color: #4b372e;
  line-height: 44px;
  cursor: pointer;
`
export const DivChartContain = styled.div`
  width: 746px;
  height: 582px;
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  background-color: #ffffff;
`
export const AudioDiv = styled.div`
  margin-top: 20px;
`
