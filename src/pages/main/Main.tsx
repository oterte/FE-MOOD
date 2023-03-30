import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import Footer from '../../components/footer/Footer'

function Main() {
  const navigate = useNavigate()
  return (
    <>
      <div>main</div>
      <MoveRecommendPage onClick={() => navigate('/recommend')}>
        음악 감상하러 가기
      </MoveRecommendPage>
      <Footer />
    </>
  )
}

export default Main

const MoveRecommendPage = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid black;
  border-radius: 50%;
  line-height: 150px;
  text-align: center;
  cursor: pointer;
`
