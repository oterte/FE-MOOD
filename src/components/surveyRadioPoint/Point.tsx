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
          <StDivPointNumber
            id={String(buttonArr.point)}
            onClick={onClickPointHandler}
            key={buttonArr.number}
          >
            <span>{buttonArr.number}</span>
          </StDivPointNumber>
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
`
const StDivPointNumber = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  box-sizing: border-box;
  line-height: 40px;
  text-align: center;
`
