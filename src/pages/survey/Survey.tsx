import React from 'react'
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SurveyModal from '../../components/surveyModal/SurveyModal'
import Point from '../../components/surveyRadioPoint/Point'
import { questionArr, SurveyData } from './surveyArray'
import {
  StDivSurveyWrap,
  StSpanSurveyTitle,
  StDivSurveyExplanation,
  StPSurveyExplanation,
} from './SurveySt'

function Survey() {
  const [survey, setSurvey] = useState<SurveyData>({
    number1: undefined,
    number2: undefined,
    number3: undefined,
    number4: undefined,
    number5: undefined,
    number6: undefined,
    number7: undefined,
    number8: undefined,
    number9: undefined,
    number10: undefined,
  })
  const [modalState, setModalState] = useState<boolean>(false)
  const onClickModalOpenHandler = () => {
    if (0 <= status1 && 0 <= status2) {
      setModalState(!modalState)
    } else {
      alert('설문을 모두 선택해주세요!')
    }
  }
  let status1: number = 0
  let status2: number = 0
  for (let i = 0; i < 10; i++) {
    if (i < 5) {
      status1 = status1 + Object.values(survey)[i]
    } else {
      status2 = status2 + Number(Object.values(survey)[i])
    }
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <Header />
      <StDivSurveyWrap>
        <StDivSurveyExplanation>
          <StSpanSurveyTitle>
            기분에 따라 노래를 추천 받아보세요
          </StSpanSurveyTitle>
          <StPSurveyExplanation>
            설문조사는 총 10문항으로
            <br />
            결과를 기반으로 노래가 추천됩니다.
          </StPSurveyExplanation>
        </StDivSurveyExplanation>
        <form onSubmit={onSubmitHandler}>
          <div>
            {questionArr.map((question) => {
              return (
                <div key={question.id}>
                  <span>Q. {question.question}</span>
                  <div>
                    <Point
                      number={Object.keys(survey)[question.id]}
                      setSurvey={setSurvey}
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <button onClick={onClickModalOpenHandler}>완료</button>
        </form>
      </StDivSurveyWrap>
      {modalState === true ? (
        <SurveyModal
          modalState={modalState}
          setModalState={setModalState}
          status1={status1}
          status2={status2}
        />
      ) : null}
      {/* <Footer /> */}
    </>
  )
}

export default Survey
