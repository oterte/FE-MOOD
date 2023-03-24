import { surveyButtonArr, SurveyData } from '../../pages/survey/surveyArray'

interface Props {
  number: string
  setSurvey: React.Dispatch<React.SetStateAction<SurveyData>>
}

const Point = ({ number, setSurvey }: Props) => {
  const onClickPointHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget.id)
    const point = Number(e.currentTarget.id)
    setSurvey((prevState: SurveyData) => {
      return { ...prevState, [number]: point }
    })
  }
  return (
    <div>
      {surveyButtonArr.map((buttonArr) => {
        return (
          <div
            id={String(buttonArr.point)}
            onClick={onClickPointHandler}
            key={buttonArr.number}
          >
            <p>{buttonArr.number}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Point
