interface QuestionArr {
  id: number
  questionNumber: number
  question: string
}

export interface SurveyData {
  number1?: number
  number2?: number
  number3?: number
  number4?: number
  number5?: number
  number6?: number
  number7?: number
  number8?: number
  number9?: number
  number10?: number
}

export const questionArr: QuestionArr[] = [
  {
    id: 0,
    questionNumber: 1,
    question: '오늘 당신의 웃음 지수는 어느 정도인가요?',
  },
  {
    id: 1,
    questionNumber: 2,
    question:
      '오늘 당신이 날아다닐 수 있다면, 얼마나 높이 날아올라갈 수 있을까요?',
  },
  {
    id: 2,
    questionNumber: 3,
    question: '지금 당신은 얼마나 행복한 표정을 짓고 있나요?',
  },
  {
    id: 3,
    questionNumber: 4,
    question: '보람찬 하루를 보냈나요?',
  },
  {
    id: 4,
    questionNumber: 5,
    question: 'Shall We Dance?',
  },
  {
    id: 5,
    questionNumber: 6,
    question:
      '오늘 느낀 감정의 강도를 불꽃놀이로 표현한다면 얼마나 화려한 불꽃놀이일까요?',
  },
  {
    id: 6,
    questionNumber: 7,
    question:
      '당신이 오늘 느낀 감정을 요리로 표현한다면 얼마나 매운 음식일까요?',
  },
  {
    id: 7,
    questionNumber: 8,
    question: '당신의 감정을 풍선으로 표현한다면 얼마나 큰 풍선일까요?',
  },
  {
    id: 8,
    questionNumber: 9,
    question:
      '감정의 격렬함을 음악의 볼륨으로 표현한다면, 지금 당신의 볼륨은 어느 정도일까요?',
  },
  {
    id: 9,
    questionNumber: 10,
    question:
      '현재 느끼고 있는 감정이 롤러코스터에 비유하자면 어떤 높이의 곡올림일까요?',
  },
]

export const surveyButtonArr = [
  {
    id: 1,
    number: 1,
    point: 0,
  },
  {
    id: 2,
    number: 2,
    point: 5,
  },
  {
    id: 3,
    number: 3,
    point: 10,
  },
  {
    id: 4,
    number: 4,
    point: 15,
  },
  {
    id: 5,
    number: 5,
    point: 20,
  },
]
