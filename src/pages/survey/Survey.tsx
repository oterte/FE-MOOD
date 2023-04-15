import React, { useRef, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import SurveyModal from '../../components/surveyModal/SurveyModal'
import Point from '../../components/surveyRadioPoint/Point'
import { questionArr, SurveyData } from './surveyArray'
import {
  StDivSurveyWrap,
  StSpanSurveyTitle,
  StPSurveyExplanation,
  StDIvPointWrap,
  StPSurveyQuestion,
  Wrapper,
  StDivAnswer,
  StPAnswerLeft,
  StPAnswerRight,
  StDivSubmit,
  StDivSlide,
  StDivCarouselWrap,
  StDivMoveBtn,
  StSpanCurrentSlide,
  StDivCarouselBtn
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
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const slideRef = useRef<HTMLDivElement>(null)
  const containRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (currentSlide < 9) setCurrentSlide(currentSlide + 1)
  }
  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1)
  }

  useEffect(() => {
    if (slideRef.current && containRef.current) {
      slideRef.current.style.transition = 'all 0.7s ease-in-out'
      slideRef.current.style.transform = `translateX(-${currentSlide}0%)`
    }
  }, [currentSlide])

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

  const onClickModalOpenHandler = () => {
    if (0 <= status1 && 0 <= status2) {
      setModalState(!modalState)
    } else {
      alert('설문을 모두 선택해주세요!')
    }
  }

  return (
    <>
      <Wrapper>
        <Header />
        <StDivSurveyWrap>
          <div style={{ marginTop: '50px' }}>
            <StSpanSurveyTitle>
              기분에 따라 노래를 추천 받아보세요
            </StSpanSurveyTitle>
            <StPSurveyExplanation>
              설문조사는 총 10문항으로
              <br />
              결과를 기반으로 노래가 추천됩니다.
            </StPSurveyExplanation>
          </div>
          <form onSubmit={onSubmitHandler}>
            <StDivCarouselWrap>
              <StDivSlide ref={slideRef}>
                {questionArr.map((question) => {
                  return (
                    <StDIvPointWrap ref={containRef} key={question.id}>
                      <StPSurveyQuestion>
                        {question.questionNumber}. {question.question}
                      </StPSurveyQuestion>
                      <Point
                        number={Object.keys(survey)[question.id]}
                        setSurvey={setSurvey}
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                      />
                      <StDivAnswer>
                        <StPAnswerLeft>전혀 아니다</StPAnswerLeft>
                        <StPAnswerRight>매우 그렇다</StPAnswerRight>
                      </StDivAnswer>
                    </StDIvPointWrap>
                  )
                })}
              </StDivSlide>
            </StDivCarouselWrap>

            <StSpanCurrentSlide> {currentSlide + 1} / 10</StSpanCurrentSlide>
            <StDivCarouselBtn>
              <StDivMoveBtn onClick={prevSlide} color="#8b7d76">
                이전 문항으로
              </StDivMoveBtn>
              {currentSlide !== 9 ? (
                <StDivMoveBtn onClick={nextSlide} color="#4b372e">
                  다음 문항으로
                </StDivMoveBtn>
              ) : (
                <StDivSubmit onClick={onClickModalOpenHandler}>
                  결과 확인하기
                </StDivSubmit>
              )}
            </StDivCarouselBtn>
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
      </Wrapper>
    </>
  )
}

export default Survey
