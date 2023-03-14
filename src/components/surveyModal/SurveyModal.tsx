import styled from 'styled-components'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getSurveyMusic } from '../../api/recommendApi'
import { useNavigate } from 'react-router-dom'

type Props = {
  average: number
  modalState: boolean
  setModalState: React.Dispatch<React.SetStateAction<boolean>>
}

function SurveyModal({ average, modalState, setModalState }: Props) {
  const onClickCloseModalHandler = () => {
    setModalState(!modalState)
  }
  //   const { isLoading, isError, data } = useQuery(['surveyMusic'], () =>
  //     getSurveyMusic(musicNumber)
  //   )
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
    `
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = ''
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    }
  })
  const onClickMoveMusicDetailPageHandler = () => {
    // navigate(`/recommend/music/${data.musicId}`)
  }
  const onClickMoveReccomendPageHandler = () => {
    navigate('/recommend')
  }

  let condition: string
  let musicNumber: number
  if (average < 13) {
    condition = '오늘 힘든 하루를 보내셨군요'
    musicNumber = 1
  } else if (average < 20) {
    condition = '무난한 하루를 보내셨군요'
    musicNumber = 2
  } else {
    condition = '기분 좋은 하루를 보내셨군요'
    musicNumber = 31
  }
  //   if (isLoading) return <h1>Loading</h1>
  //   if (isError) return <h1>Error 발생</h1>
  return (
    <ModalContainer>
      <StModalContents>
        <div>
          <button onClick={onClickCloseModalHandler}>X</button>
          <p>{condition}</p>
          <p>
            {/* data.composer */}의 {/* data.musicTitle */}를 들어보시는건
            어떠세요?
          </p>
          <div>
            <button onClick={onClickMoveMusicDetailPageHandler}>
              {/* data.musicTitle */} 노래 들으러 가기
            </button>
          </div>
          <div>
            <button onClick={onClickMoveReccomendPageHandler}>
              홈페이지로 돌아가기
            </button>
          </div>
        </div>
      </StModalContents>
    </ModalContainer>
  )
}

export default SurveyModal

const ModalContainer = styled.div`
  animation: modal-show 0.3s;
  animation: modal-bg-show 0.3s;
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`
const StModalContents = styled.div`
  width: 300px;
  height: 300px;
  margin: auto;
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);
  @keyframes modal-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
