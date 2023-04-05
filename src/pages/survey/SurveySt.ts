import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
`
export const StDivSurveyWrap = styled.div`
  width: 1260px;
  margin: auto;
  text-align: center;
`
export const StSpanSurveyTitle = styled.span`
  width: 500px;
  height: 46px;
  font-size: 32px;
`
export const StPSurveyExplanation = styled.p`
  width: 400px;
  font-size: 20px;
  font-weight: 400;
  margin: 20px auto 100px auto;
  color: #888888;
`
export const StDivSlide = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
`
export const StDIvPointWrap = styled.div`
  width: 1260px;
  height: 310px;
  margin: 0px 30px 22px 0px;
  border: 1px solid #d0d9d9;
  background-color: #fefefe;
  box-sizing: border-box;
`
export const StPSurveyQuestion = styled.p`
  margin-top: 66px;
  color: #000000;
`
export const StDivAnswer = styled.div`
  display: flex;
  width: 700px;
  margin: auto;
`
export const StPAnswerLeft = styled.p`
  margin-right: auto;
  color: #888888;
`
export const StPAnswerRight = styled.p`
  color: #888888;
`
export const StDivCarouselWrap = styled.div`
  margin: 20px auto;
  width: 330px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #ffffff;
`
export const StDivMoveBtn = styled.div`
  width: 156px;
  height: 45px;
  line-height: 45px;
  background: ${(props) => props.color};
  cursor: pointer;
`
export const StSpanCurrentSlide = styled.span`
  font-size: 20px;
  color: #888888;
`

export const StDivSubmit = styled.div`
  width: 156px;
  height: 45px;
  line-height: 45px;
  background-color: #4b372e;
  color: #ffffff;
  cursor: pointer;
`
export const BackgroundDesign = styled.div`
  width: 350px;
  height: 636px;
  background: linear-gradient(
    180deg,
    rgba(75, 55, 46, 0) 0%,
    #46342b 46.35%,
    rgba(40, 29, 24, 0) 100%
  );
  transform: rotate(-53.65deg);
  position: fixed;
  z-index: 0;
`
export const ContainWrap = styled.div`
  z-index: 1;
`
