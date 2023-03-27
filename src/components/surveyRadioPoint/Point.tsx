import styled from 'styled-components'
import { surveyButtonArr, SurveyData } from '../../pages/survey/surveyArray'

interface Props {
  number: string
  setSurvey: React.Dispatch<React.SetStateAction<SurveyData>>
}

const Point = ({ number, setSurvey }: Props) => {
  const onClickPointHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const point = Number(e.currentTarget.id)
    setSurvey((prevState: SurveyData) => {
      return { ...prevState, [number]: point }
    })
  }
  return (
    <StDivPointWrap>
      {surveyButtonArr.map((buttonArr) => {
        return (
          <StDivPointContain key={buttonArr.number}>
            <StDivPointNumber
              id={String(buttonArr.point)}
              onClick={onClickPointHandler}
            >
              <StSpanPointNumber>{buttonArr.number}</StSpanPointNumber>
            </StDivPointNumber>
          </StDivPointContain>
        )
      })}
    </StDivPointWrap>
  )
}

export default Point

const StDivPointWrap = styled.div`
  width: 500px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
`
const StDivPointNumber = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #D0D9D9;
  box-sizing: border-box;
  line-height: 48px;
  text-align: center;
  margin: auto;
`
const StDivPointContain = styled.div`
  margin-top: 48px;
`
const StSpanPointNumber = styled.span`
  font-size: 16px;
`
