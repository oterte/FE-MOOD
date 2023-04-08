import React from 'react'
import Header from '../../components/header/Header'
import Play from '../../components/playbar/Play'
import {
  DoneBtn,
  MyPageDoneDiv,
  PDone,
  PThin,
  TextDiv,
} from './mypagecontentsSC'
import { useNavigate } from 'react-router-dom'

function MyPageDeleteDone() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <MyPageDoneDiv>
        <TextDiv>
          <PDone>회원탈퇴가 완료되었습니다.</PDone>
          <PThin>그동안 MOOD를 이용해주셔서 감사합니다.</PThin>
          <PThin>더욱더 발전하는 MOOD가 되겠습니다.</PThin>
          <DoneBtn onClick={() => navigate('/recommend')}>확인</DoneBtn>
        </TextDiv>
      </MyPageDoneDiv>
    </>
  )
}

export default MyPageDeleteDone
