import styled from 'styled-components'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getSurveyMusic } from '../../api/recommendApi'
import { AiOutlineClose } from 'react-icons/ai'

type Props = {
  modalState: boolean
  setModalState: React.Dispatch<React.SetStateAction<boolean>>
  status1: number
  status2: number
}

function SurveyModal({ modalState, setModalState, status1, status2 }: Props) {
  const onClickCloseModalHandler = () => {
    setModalState(!modalState)
  }
  const { isLoading, isError, data } = useQuery(['surveyMusic'], () =>
    getSurveyMusic(status1, status2)
  )
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
    navigate(`/recommend/music/${data.musicId}`)
  }
  const onClickMoveReccomendPageHandler = () => {
    navigate('/recommend')
  }
  if (isLoading) return <h1>Loading</h1>
  if (isError) return <h1>Error 발생</h1>

  return (
    <ModalContainer>
      <StModalContents>
        <div>
          <StModalClose onClick={onClickCloseModalHandler}>
            <AiOutlineClose />
          </StModalClose>
          <StPCondition>{data.msg}</StPCondition>
          <StPRecommend>
            {data.data.composer}의 {data.data.musicTitle}를 <br />
            들어보시는건 어떠세요?
          </StPRecommend>
          <div>
            <StDivMoveMusic onClick={onClickMoveMusicDetailPageHandler}>
              <StSpanMoveMusic>곡 들으러 가기</StSpanMoveMusic>
            </StDivMoveMusic>
          </div>
          <div>
            <StDivMoveHome onClick={onClickMoveReccomendPageHandler}>
              <StSpanMoveMusic>홈페이지로 돌아가기</StSpanMoveMusic>
            </StDivMoveHome>
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
  width: 540px;
  height: 550px;
  background-color: #281d18;
  margin: auto;
  text-align: center;
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
const StModalClose = styled.div`
  color: #ffffff;
  margin-left: 550px;
  font-size: 22px;
`
const StPCondition = styled.p`
  color: #efefef;
  margin-top: 95px;
  font-size: 25px;
  font-weight: 500;
`
const StPRecommend = styled.p`
  color: #efefef;
  font-size: 16px;
  margin-top: 30px;
`
const StDivMoveMusic = styled.div`
  width: 170px;
  height: 44px;
  margin: 100px auto 50px auto;
  line-height: 44px;
  background-color: #bf9b30;
`
const StSpanMoveMusic = styled.span`
  color: #efefef;
  font-size: 16px;
`
const StDivMoveHome = styled.div`
  width: 170px;
  height: 44px;
  margin: auto;
  line-height: 44px;
  background-color: #bf9b30;
`
