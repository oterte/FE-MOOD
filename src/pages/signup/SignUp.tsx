import React, { useState } from 'react'
import Footer from '../../components/Footer'
import useInput from '../../hooks/useInput'
import { SignupContainer } from './singup'

function SignUp() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')


  // 버그 픽스 필요
  //아이디: 영어 대소문자와 숫자를 포함한 4글자 이상
  const checkIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let regExp: RegExp = /^[a-zA-Z0-9]{4,}$/
    if (regExp.test(e.target.value) === false) {
      alert('아이디는 영어 대소문자와 숫자를 포함한 4글자 이상이어야 합니다.')
      return
    }
  }

  // 이메일 형식
  const checkEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let regExp: RegExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    if (regExp.test(e.target.value) === false) {
      alert('알맞은 이메일 형식이 아닙니다.')
      return
    }
  }

  // 비밀번호: 영문 대소문자와 특수문자를 포함한 8글자 이상
  const checkPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let regExp: RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~\-={}[\]:;\"'<>?,./]).{8,}$/
    if (regExp.test(e.target.value) === false) {
      alert(
        '비밀번호는 영문 대소문자 및 특수문자를 포함한 8글자 이상이어야 합니다.')
        return
    }
  }

  // 닉네임 : 두글자 이상
  const checkNicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 2) {
      alert('닉네임은 두글자 이상이어야 합니다.')
      return
    }
  }

  const onSubmitSignUpHandler = () => {
    if (!id || !email || !password || !confirm || !nickname) return
    if (password === confirm) {
      console.log('id :' + id)
      console.log('email :' + email)
      console.log('password :' + password)
      console.log('nickname :' + nickname)

    } else {
      alert('비밀번호가 동일하지 않습니다.')
    }
  }
  return (
    <>
      <SignupContainer>
      <div>
            <label>아이디</label>
            <input
              type="text"
              name="id"
              placeholder='아이디를 입력하세요'
              value={id}
              onBlur={checkIdHandler}
              onChange={(e) => {
                setId(e.target.value)
              }}
            />
          </div>
          <div>
            <label>이메일</label>
            <input
              type="text"
              name="email"
              value={email}
              onBlur={checkEmailHandler}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div>
            <label>닉네임</label>
            <input
              type="text"
              name="nickname"
              value={nickname}
              onBlur={checkNicknameHandler}
              onChange={(e) => {
                setNickname(e.target.value)
              }}
            />
          </div>
          <div>
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              value={password}
              onBlur={checkPasswordHandler}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <div>
            <label>비밀번호 확인</label>
            <input
              type="password"
              name="confirm"
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value)
              }}
            />
          </div>
          <button
            onClick={() => {
              onSubmitSignUpHandler()
            }}
          >
            회원가입
          </button>
      </SignupContainer>
      <Footer />
    </>
  )
}

export default SignUp
