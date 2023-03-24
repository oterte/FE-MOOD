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
    question: '오늘 얼마나 행복했나요?',
  },
  {
    id: 1,
    questionNumber: 2,
    question: '오늘 하루 한숨을 열 번 이상 쉬셨나요?',
  },
  {
    id: 2,
    questionNumber: 3,
    question: '지금 좋은 생각을 하고 있나요?',
  },
  {
    id: 3,
    questionNumber: 4,
    question: '오늘 하루 눈물을 흘린 적이 있나요?',
  },
  {
    id: 4,
    questionNumber: 5,
    question: '보람찬 하루를 보냈나요?',
  },
  {
    id: 5,
    questionNumber: 6,
    question: '혹시 마음의 여유가 필요하신가요?',
  },
  {
    id: 6,
    questionNumber: 7,
    question: 'Shall we dance?',
  },
  {
    id: 7,
    questionNumber: 8,
    question: '질문 8',
  },
  {
    id: 8,
    questionNumber: 9,
    question: '질문 9',
  },
  {
    id: 9,
    questionNumber: 10,
    question: '질문 10',
  },
]

export const surveyButtonArr = [
  {
    number: 1,
    point: 0,
  },
  {
    number: 2,
    point: 2,
  },
  {
    number: 3,
    point: 4,
  },
  {
    number: 4,
    point: 6,
  },
  {
    number: 5,
    point: 8,
  },
  {
    number: 6,
    point: 10,
  },
  {
    number: 7,
    point: 12,
  },
  {
    number: 8,
    point: 14,
  },
  {
    number: 9,
    point: 16,
  },
  {
    number: 10,
    point: 18,
  },
]
