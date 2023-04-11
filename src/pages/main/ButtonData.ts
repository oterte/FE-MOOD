import {
  ScrollMove,
  ScrollMove2,
  ScrollMove3,
  ScrollMove4,
  ScrollMove5,
} from './mainSt'
import { StyledComponent } from 'styled-components'

interface ButtonDataItem {
  text: string
  sectionId: string
  styledComponent: StyledComponent<'button', any, {}, never>
}

const ButtonData: ButtonDataItem[] = [
  {
    text: 'Mood',
    sectionId: 'section1',
    styledComponent: ScrollMove,
  },
  {
    text: 'Chopin',
    sectionId: 'section2',
    styledComponent: ScrollMove2,
  },
  {
    text: 'Vivaldi',
    sectionId: 'section3',
    styledComponent: ScrollMove3,
  },
  {
    text: 'Beethoven',
    sectionId: 'section4',
    styledComponent: ScrollMove4,
  },
  {
    text: 'Mozart',
    sectionId: 'section5',
    styledComponent: ScrollMove5,
  },
]

export default ButtonData
