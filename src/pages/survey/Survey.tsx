import React from 'react'
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Point from '../../components/surveyRadioPoint/Point'

export interface SurveyData {
  number1?: number
  number2?: number
  number3?: number
  number4?: number
  number5?: number
  number6?: number
  number7?: number
}

function Survey() {
  const [survey, setSurvey] = useState<SurveyData>({
    number1: undefined,
    number2: undefined,
    number3: undefined,
    number4: undefined,
    number5: undefined,
    number6: undefined,
    number7: undefined,
  })

  let average: number = 0
  let sum: number = 50

  for (let i = 0; i < 7; i++) {
    if (i % 2 === 0 || i === 0) {
      sum = Number(sum) + Number(Object.values(survey)[i])
    } else {
      sum = Number(sum) - Number(Object.values(survey)[i])
    }
    average = sum / 7
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  console.log(survey)
  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler}>
          <h1>질문 1</h1>
          <span>오늘 얼마나 행복했었나요?</span>
          <Point number={Object.keys(survey)[0]} setSurvey={setSurvey} />
          <h1>질문 2</h1>
          <span>오늘 하루 한숨을 열 번이상 쉬셨나요?</span>
          <Point number={Object.keys(survey)[1]} setSurvey={setSurvey} />
          <h1>질문 3</h1>
          <span>지금 좋은 생각을 하고있나요?</span>
          <Point number={Object.keys(survey)[2]} setSurvey={setSurvey} />
          <h1>질문 4</h1>
          <span>오늘 하루 눈물을 흘린 적이 있나요?</span>
          <Point number={Object.keys(survey)[3]} setSurvey={setSurvey} />
          <h1>질문 5</h1>
          <span>보람찬 하루를 보냈나요?</span>
          <Point number={Object.keys(survey)[4]} setSurvey={setSurvey} />
          <h1>질문 6</h1>
          <span>혹시 마음의 여유가 필요하신가요?</span>
          <Point number={Object.keys(survey)[5]} setSurvey={setSurvey} />
          <h1>질문 7</h1>
          <span>Shall We Dance?</span>
          <Point number={Object.keys(survey)[6]} setSurvey={setSurvey} />
          <button>완료</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Survey
