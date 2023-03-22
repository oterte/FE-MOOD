import { SurveyData } from '../../pages/survey/surveyArray'

interface Props {
  number: string
  setSurvey: React.Dispatch<React.SetStateAction<SurveyData>>
}

const Point = ({ number, setSurvey }: Props) => {
  const onChangePoint2Handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurvey((prevState: any) => {
      return { ...prevState, [number]: Number(e.target.value) }
    })
  }
  return (
    <div>
      <label>전혀 아니다</label>
      <input
        type="radio"
        id="1"
        name={number}
        value={0}
        onChange={(e) => onChangePoint2Handler(e)}
      />
      <label>아니다</label>
      <input
        type="radio"
        id="2"
        name={number}
        value={5}
        onChange={(e) => onChangePoint2Handler(e)}
      />
      <label>보통이다</label>
      <input
        type="radio"
        id="3"
        name={number}
        value={10}
        onChange={(e) => onChangePoint2Handler(e)}
      />
      <label>그렇다</label>
      <input
        type="radio"
        id="4"
        name={number}
        value={15}
        onChange={(e) => onChangePoint2Handler(e)}
      />
      <label>매우 그렇다</label>
      <input
        type="radio"
        id="5"
        name={number}
        value={20}
        onChange={(e) => onChangePoint2Handler(e)}
      />
    </div>
  )
}

export default Point
