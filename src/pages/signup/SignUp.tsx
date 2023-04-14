import React, { useState, useEffect } from 'react'
import {
  SignupContainer,
  SignupInput,
  SignupLabel,
  SignupForm,
  SingupButton,
  SignupErrorSpan,
  SignupCheckBtn,
  SignupInputTwo,
  SignupErrorDiv,
  SignupLabelDiv,
  SingupButtonDisabled,
  SignupDiv,
  InputDiv,
  SignUpUpperDiv,
  SignupCheckBtnDisabled,
  TitleDiv,
} from './singup'
import {
  authEmail,
  checkAuthEmailNumber,
  checkId,
  checkNickname,
  register,
} from '../../api/signup'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'

function SignUp() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')
  const [idMessage, setIdMessage] = useState('')
  const [nicknameMessage, setNicknameMessage] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [confirmCheckMessage, setConfirmCheckMessage] = useState('')
  const [idResponse, setIdResponse] = useState(0)
  const [nicknameResponse, setNicknameResponse] = useState(0)
  const [idCheck, setIdCheck] = useState(false)
  const [passwordCheck, setPasswordCheck] = useState(false)
  const [confirmCheck, setConfirmCheck] = useState(false)
  const [emailCheck, setEmailCheck] = useState(false)
  const [nicknameCheck, setNicknameCheck] = useState(false)
  const [checkAuthEmail, setCheckAuthEmail] = useState('')
  const [isSend, setIsSend] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate()
  const onClickIdHandler = () => {
    setIdMessage(
      '아이디는 영어 소문자와 숫자를 포함한 4글자 이상이어야 합니다.'
    )
  }
  const onClickNickHandler = () => {
    setNicknameMessage('닉네임은 두글자 이상, 8글자 이하여야 합니다.')
  }
  const onClickEmailHandler = () => {
    setEmailMessage('올바른 이메일 형식이 아닙니다.')
  }
  const onClickPWHandler = () => {
    setPasswordMessage(
      '비밀번호는 영문 대소문자와 숫자, 특수문자를 포함한 8글자 이상이어야 합니다.'
    )
  }
  const onClickCheckHandler = () => {
    setConfirmCheckMessage('비밀번호가 동일하지 않습니다.')
  }
  const onCheckIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
    let regExp: RegExp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{4,}$/
    if (regExp.test(e.target.value) === false) {
      setIdMessage(
        '아이디는 영어 소문자와 숫자를 포함한 4글자 이상이어야 합니다.'
      )
      setIdCheck(false)
    } else {
      setIdMessage('올바른 id 형식입니다.')
      setIdCheck(true)
    }
  }

  const onCheckEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)

    let regExp: RegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    if (regExp.test(e.target.value) === false) {
      setEmailMessage('올바른 이메일 형식이 아닙니다.')
      setEmailCheck(false)
    } else {
      setEmailMessage('올바른 이메일 형식입니다.')
      setEmailCheck(true)
    }
  }

  const onCheckPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)

    let regExp: RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~\-={}[\]:;\"'<>?,./]).{8,}$/
    if (regExp.test(e.target.value) === false) {
      setPasswordMessage(
        '비밀번호는 영문 대소문자와 숫자, 특수문자를 포함한 8글자 이상이어야 합니다.'
      )
      setPasswordCheck(false)
    } else {
      setPasswordMessage('올바른 비밀번호 형식입니다.')
      setPasswordCheck(true)
    }
  }

  const onCheckNicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
    let regExp: RegExp = /^[^\s]{2,8}$/
    if (regExp.test(e.target.value) === false) {
      setNicknameMessage('닉네임은 두글자 이상, 8글자 이하여야 합니다.')
      setNicknameCheck(false)
    } else {
      setNicknameMessage('올바른 닉네임 형식입니다.')
      setNicknameCheck(true)
    }
  }

  const onCheckConfirmHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirm(e.target.value)
  }
  useEffect(() => {
    if (confirm === '') {
      return
    }
    if (confirm !== password) {
      setConfirmCheckMessage('비밀번호가 동일하지 않습니다.')
      setConfirmCheck(false)
    } else {
      setConfirmCheckMessage('비밀번호가 동일합니다.')
      setConfirmCheck(true)
    }
  }, [confirm, password])

  const onCheckAuthEmailPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckAuthEmail(e.target.value)
  }
  const onCheckAuthEmailPwHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    const emailPw = checkAuthEmail
    checkAuthEmailNumber(email, emailPw)
      .then((res) => {
        alert(res.data.check.message)
        setIsAuth(true)
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  const onSubmitSignUpHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const body = { id, password, confirm, email, nickname }
    if (
      !idCheck ||
      !emailCheck ||
      !passwordCheck ||
      !confirmCheck ||
      !nicknameCheck
    ) {
      alert('모든 입력칸을 입력해주세요.')
    }
    if (
      idCheck &&
      nicknameCheck &&
      emailCheck &&
      passwordCheck &&
      confirmCheck &&
      isAuth
    ) {
      register(body)
        .then((res) => {
          alert(res.data.message)
          navigate('/login')
          return res
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    }
  }
  const onCheckExistId = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (id !== '') {
      checkId(id)
        .then((res) => {
          setIdResponse(res.status)
          alert('사용 가능한 아이디입니다.')
        })
        .catch((error) => {
          alert(error.response.data.message)
          setIdResponse(error.response.status)
        })
    }
  }
  const onCheckExistNickName = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (nickname !== '') {
      checkNickname(nickname)
        .then((res) => {
          alert('사용 가능한 닉네임입니다.')
          setNicknameResponse(res.status)
        })
        .catch((error) => {
          alert(error.response.data.message)
          setNicknameResponse(error.response.status)
        })
    }
  }
  const onCheckEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (email !== '' && emailCheck === true) {
      authEmail(email)
        .then((res) => {
          alert(res.data.message)
          setIsSend(true)
        })
        .catch((error) => {
          alert('인증 이메일 전송에 실패했습니다.')
        })
    }
  }
  return (
    <>
      <Header />
      <SignupContainer>
        <SignUpUpperDiv>
          <SignupForm>
            <TitleDiv>
              <p>Sign Up</p>
            </TitleDiv>
            <SignupDiv>
              <SignupLabelDiv>
                <SignupLabel>아이디</SignupLabel>
              </SignupLabelDiv>

              <InputDiv>
                <SignupInput
                  type="text"
                  name="id"
                  placeholder="아이디를 입력하세요"
                  value={id}
                  onChange={onCheckIdHandler}
                  onClick={onClickIdHandler}
                />
                {idCheck === false ? (
                  <SignupCheckBtnDisabled disabled>
                    중복확인
                  </SignupCheckBtnDisabled>
                ) : (
                  <SignupCheckBtn onClick={onCheckExistId}>
                    중복확인
                  </SignupCheckBtn>
                )}
              </InputDiv>
              <SignupErrorDiv>
                {idCheck === false ? (
                  <SignupErrorSpan style={{ color: 'red' }}>
                    {idMessage}
                  </SignupErrorSpan>
                ) : (
                  <SignupErrorSpan style={{ color: 'gray' }}>
                    {idMessage}
                  </SignupErrorSpan>
                )}
              </SignupErrorDiv>
            </SignupDiv>
            <SignupDiv>
              <SignupLabelDiv>
                <SignupLabel>닉네임</SignupLabel>
              </SignupLabelDiv>
              <InputDiv>
                <SignupInput
                  type="text"
                  name="nickname"
                  placeholder="닉네임을 입력하세요"
                  value={nickname}
                  onChange={onCheckNicknameHandler}
                  onClick={onClickNickHandler}
                />
                {nicknameCheck === false ? (
                  <SignupCheckBtnDisabled disabled>
                    중복확인
                  </SignupCheckBtnDisabled>
                ) : (
                  <SignupCheckBtn onClick={onCheckExistNickName}>
                    중복확인
                  </SignupCheckBtn>
                )}
              </InputDiv>
              <SignupErrorDiv>
                {nicknameCheck === false ? (
                  <SignupErrorSpan style={{ color: 'red' }}>
                    {nicknameMessage}
                  </SignupErrorSpan>
                ) : (
                  <SignupErrorSpan style={{ color: 'gray' }}>
                    {nicknameMessage}
                  </SignupErrorSpan>
                )}
              </SignupErrorDiv>
            </SignupDiv>
            <SignupDiv>
              <SignupLabelDiv>
                <SignupLabel>이메일</SignupLabel>
              </SignupLabelDiv>
              <InputDiv>
                <SignupInput
                  type="email"
                  name="email"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChange={onCheckEmailHandler}
                  onClick={onClickEmailHandler}
                />
                {emailCheck === false ? (
                  <SignupCheckBtnDisabled disabled>
                    인증 메일 발송
                  </SignupCheckBtnDisabled>
                ) : (
                  <SignupCheckBtn onClick={onCheckEmail}>
                    인증 메일 발송
                  </SignupCheckBtn>
                )}
              </InputDiv>
              <SignupErrorDiv>
                {emailCheck === false ? (
                  <SignupErrorSpan style={{ color: 'red' }}>
                    {emailMessage}
                  </SignupErrorSpan>
                ) : (
                  <SignupErrorSpan style={{ color: 'gray' }}>
                    {emailMessage}
                  </SignupErrorSpan>
                )}
              </SignupErrorDiv>
            </SignupDiv>
            {isSend === true ? (
              <SignupDiv>
                <SignupLabelDiv>
                  <SignupLabel>이메일 인증 번호 입력</SignupLabel>
                </SignupLabelDiv>
                <InputDiv>
                  <SignupInput
                    type="email"
                    name="email"
                    placeholder="인증번호를 입력하세요"
                    value={checkAuthEmail}
                    onChange={onCheckAuthEmailPw}
                  />
                  <SignupCheckBtn onClick={onCheckAuthEmailPwHandler}>
                    인증하기
                  </SignupCheckBtn>
                </InputDiv>
              </SignupDiv>
            ) : null}
            <SignupDiv>
              <SignupLabelDiv>
                <SignupLabel>비밀번호</SignupLabel>
              </SignupLabelDiv>
              <InputDiv>
                <SignupInputTwo
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={onCheckPasswordHandler}
                  onClick={onClickPWHandler}
                />
              </InputDiv>
              <SignupErrorDiv>
                {passwordCheck === false ? (
                  <SignupErrorSpan style={{ color: 'red' }}>
                    {passwordMessage}
                  </SignupErrorSpan>
                ) : (
                  <SignupErrorSpan style={{ color: 'gray' }}>
                    {passwordMessage}
                  </SignupErrorSpan>
                )}
              </SignupErrorDiv>
            </SignupDiv>
            <SignupDiv>
              <SignupLabelDiv>
                <SignupLabel>비밀번호 확인</SignupLabel>
              </SignupLabelDiv>
              <InputDiv>
                <SignupInputTwo
                  type="password"
                  name="confirm"
                  placeholder="동일한 비밀번호를 입력하세요."
                  value={confirm}
                  onChange={onCheckConfirmHandler}
                  onClick={onClickCheckHandler}
                />
              </InputDiv>
              <SignupErrorDiv>
                {confirmCheck === false ? (
                  <SignupErrorSpan style={{ color: 'red' }}>
                    {confirmCheckMessage}
                  </SignupErrorSpan>
                ) : (
                  <SignupErrorSpan style={{ color: 'gray' }}>
                    {confirmCheckMessage}
                  </SignupErrorSpan>
                )}
              </SignupErrorDiv>
            </SignupDiv>
            {idResponse === 200 &&
            nicknameResponse === 200 &&
            isAuth === true ? (
              <div>
                <SingupButton
                  onClick={(e) => {
                    onSubmitSignUpHandler(e)
                  }}
                >
                  Sign Up
                </SingupButton>
              </div>
            ) : (
              <div>
                <SingupButtonDisabled disabled>Sign Up</SingupButtonDisabled>
              </div>
            )}
          </SignupForm>
        </SignUpUpperDiv>
      </SignupContainer>
    </>
  )
}

export default SignUp
