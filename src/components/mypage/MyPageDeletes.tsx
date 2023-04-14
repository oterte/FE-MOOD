import React, { useState } from 'react'
import {
  deleteAccount,
} from '../../api/mypage'
import '../../pages/mypage/mypagePagination.css'
import {
  MyPageContentsContainer,
  MyPageDeleteBtn,
  MyPageDeleteBtnDisabled,
  MyPageDeleteBtnDiv,
  MyPageDeleteDivOne,
  MyPageDeleteDivTwo,
  MyPageDeleteInput,
  MyPageEmailBtn,
  MyPageEmailDiv,
  POne,
  PThree,
  PTwo,
} from '../../pages/mypage/mypagecontentsSC'
import { useNavigate } from 'react-router'
import {
  onDeletetHandler,
  onRemoveToken,
} from '../../util/cookie'
import {
  authEmail,
  checkAuthEmailNumber
} from '../../api/signup'
function MyPageDeletes() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [authNumber, setAuthNmber] = useState('')
  const [isAuth, setIsAuth] = useState(false)
  const [isSend, setIsSend] = useState(false)
  const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const onChangeAuthNumberHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault()
    setAuthNmber(e.target.value)
  }
  const onDeleteAccountHandler = () => {
    if (!window.confirm('정말 회원 탈퇴를 진행하시겠습니까?')) {
      alert('취소되었습니다.')
    } else {
      deleteAccount(password)
        .then((res) => {
          onDeletetHandler()
          onRemoveToken()
          navigate('/delete')
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    }
  }
  const onSendAuthEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    authEmail(password)
      .then((res) => {
        alert(res.data.message)
        setIsSend(true)
      })
      .catch((error) => {
        alert("인증 메일 발송에 실패했습니다.")
      })
  }
  const onCheckAuthNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    checkAuthEmailNumber(password, authNumber)
      .then((res) => {
        alert(res.data.check.message)
        setIsAuth(true)
      })
      .catch((error) => {
        alert("인증번호 또는 가입에 사용하신 이메일 주소를 확인해주세요.")
      })
  }
  return (
    <MyPageContentsContainer>
      <MyPageDeleteDivOne>
        <POne>정말로 회원탈퇴 하시겠습니까?</POne>
        <PTwo>* 회원탈퇴 시 모든 회원정보는 삭제되며 복구할 수 없습니다.</PTwo>
      </MyPageDeleteDivOne>
      <MyPageDeleteDivTwo>
        <PThree>탈퇴하시려면 이메일 인증을 하셔야 합니다.</PThree>
        <MyPageEmailDiv>
          <MyPageDeleteInput
            type="text"
            placeholder="이메일을 입력해주세요"
            value={password}
            onChange={onChangePasswordHandler}
          />
          <MyPageEmailBtn onClick={onSendAuthEmail}>
            인증 메일 발송
          </MyPageEmailBtn>
        </MyPageEmailDiv>
        <MyPageEmailDiv>
          {isSend === true ? (
            <div>
              <MyPageDeleteInput
                type="text"
                placeholder="인증번호를 입력하세요"
                value={authNumber}
                onChange={onChangeAuthNumberHandler}
              />
              <MyPageEmailBtn onClick={onCheckAuthNumber}>
                인증 하기
              </MyPageEmailBtn>
            </div>
          ) : null}
        </MyPageEmailDiv>
        <MyPageDeleteBtnDiv>
          {isAuth === true ? (
            <MyPageDeleteBtn onClick={onDeleteAccountHandler}>
              탈퇴하기
            </MyPageDeleteBtn>
          ) : (
            <MyPageDeleteBtnDisabled disabled>탈퇴하기</MyPageDeleteBtnDisabled>
          )}
        </MyPageDeleteBtnDiv>
      </MyPageDeleteDivTwo>
    </MyPageContentsContainer>
  )
}

export default MyPageDeletes
