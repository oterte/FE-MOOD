interface QuestionArr {
    id: number
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
      question: '오늘 얼마나 행복했나요?',
    },
    {
      id: 1,
      question: '오늘 하루 한숨을 열 번 이상 쉬셨나요?',
    },
    {
      id: 2,
      question: '지금 좋은 생각을 하고 있나요?',
    },
    {
      id: 3,
      question: '오늘 하루 눈물을 흘린 적이 있나요?',
    },
    {
      id: 4,
      question: '보람찬 하루를 보냈나요?',
    },
    {
      id: 5,
      question: '혹시 마음의 여유가 필요하신가요?',
    },
    {
      id: 6,
      question: 'Shall we dance?',
    },
    {
      id: 7,
      question: '질문 8',
    },
    {
      id: 8,
      question: '질문 9',
    },
    {
      id: 9,
      question: '질문 10',
    },
  ]