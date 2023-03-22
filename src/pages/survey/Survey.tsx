import React from 'react'
import { useState, useEffect } from 'react'
import SurveyModal from '../../components/surveyModal/SurveyModal'
import Point from '../../components/surveyRadioPoint/Point'
import { questionArr, SurveyData } from './surveyArray'

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
    if (i % 2 === 0 || i === 0) {
      status1 = status1 + Object.values(survey)[i]
    } else {
      status2 = Number(status2) + Number(Object.values(survey)[i])
    }
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  console.log(status1, status2)

  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler}>
          <>
            {questionArr.map((question) => {
              return (
                <div key={question.id}>
                  <h1>질문 {question.id}</h1>
                  <span>{question.question}</span>
                  <Point
                    number={Object.keys(survey)[question.id]}
                    setSurvey={setSurvey}
                  />
                </div>
              )
            })}
            <button onClick={onClickModalOpenHandler}>완료</button>
          </>
        </form>
      </div>
      {modalState === true ? (
        <SurveyModal
          modalState={modalState}
          setModalState={setModalState}
          status1={status1}
          status2={status2}
        />
      ) : null}
    </>
  )
}

export default Survey