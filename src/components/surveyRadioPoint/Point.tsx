import { useState } from 'react'
import styled from 'styled-components'
import { surveyButtonArr, SurveyData } from '../../pages/survey/surveyArray'

interface Props {
  number: string
  setSurvey: React.Dispatch<React.SetStateAction<SurveyData>>
  currentSlide: number
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
}

const Point = ({ number, setSurvey, currentSlide, setCurrentSlide }: Props) => {
  const [btn, setBtn] = useState<number | null>(null)

  const onClickPointHandler = (
    id: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const point = Number(e.currentTarget.id)
    setSurvey((prevState: SurveyData) => {
      return { ...prevState, [number]: point }
    })
    setBtn(id)
    setTimeout(() => {
      if (currentSlide < 9) setCurrentSlide(currentSlide + 1)
    }, 300)
  }

  return (
    <StDivPointWrap>
      {surveyButtonArr.map((buttonArr) => {
        return (
          <StDivPointContain key={buttonArr.number}>
            <StDivPointNumber
              id={String(buttonArr.point)}
              style={{
                backgroundColor: btn === buttonArr.id ? '#4B372E' : '#EFEFEF',
                color: btn === buttonArr.id ? '#EFEFEF' : '#888888',
              }}
              onClick={(event) => onClickPointHandler(buttonArr.id, event)}
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
const StDivPointNumber = styled.button`
  width: 48px;
  height: 48px;
  border: 1px solid #d0d9d9;
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
