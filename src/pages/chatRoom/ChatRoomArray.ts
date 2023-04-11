import angry from '../../assets/icons/angry_brown.png'
import angryHover from '../../assets/icons/angry_white.png'

import sad from '../../assets/icons/sad_brown.png'
import sadHover from '../../assets/icons/sad_white.png'

import happy from '../../assets/icons/happy_brown.png'
import happyHover from '../../assets/icons/happy_white.png'

import bore from '../../assets/icons/boring_brown.png'
import boreHover from '../../assets/icons/boring_white.png'

import embarrass from '../../assets/icons/embarrass_brown.png'
import embarrassHover from '../../assets/icons/embarrass_white.png'

import surprise from '../../assets/icons/surprise_brown.png'
import surpriseHover from '../../assets/icons/surprise_white.png'

export const roomArray = [
  {
    number: 1,
    emotion: '분노',
    img: angry,
    imgHover: angryHover,
    explain:
      '베토벤의 론도 카프리치노(잃어버린 동전에 대한 분노)와 같이 분노의 감정을 느낀다면 참여해주세요',
  },
  {
    number: 2,
    emotion: '슬픔',
    img: sad,
    imgHover: sadHover,
    explain: '모짜르트의 레퀴엠과 같이 슬픔의 감정을 느낀다면 참여해주세요',
  },
  {
    number: 3,
    emotion: '행복',
    img: happy,
    imgHover: happyHover,
    explain: '비발디의 사계 중 여름과 같이 행복의 감정을 느낀다면 참여해주세요',
  },
  {
    number: 4,
    emotion: '지루함',
    img: bore,
    imgHover: boreHover,
    explain:
      '쇼팽의 아제르바이잔 댄스와 같이 지루함의 감정을 느낀다면 참여해주세요',
  },
  {
    number: 5,
    emotion: '부끄러움',
    img: embarrass,
    imgHover: embarrassHover,
    explain:
      '모짜르트의 피아노 협주곡 제 21번, K.467과 같이 부끄러움의 감정을 느낀다면 참여해주세요',
  },
  {
    number: 6,
    emotion: '놀램',
    img: surprise,
    imgHover: surpriseHover,
    explain: '베토벤의 운명교향곡과 같이 놀램의 감정을 느낀다면 참여해주세요',
  },
]

export interface ChatData {
  param?: string
  message: string
  token: string
}
export interface RecieveData {
  message: string | null
  nickname: string
}
export interface BeforeChatData {
  chatId: number
  roomId: number
  nickname: string
  message: string
  createdAt: string
  updatedAt: string
}
export interface ScrollChatData {
  chatId: number
  roomId: number
  nickname: string
  message: string
  createdAt: string
  updatedAt: string
}
