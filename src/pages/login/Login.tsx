import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../api/loginapi'
import Footer from '../../components/footer/Footer'
import kakao from '../../assets/kakao_login_large_narrow.png'
import Header from '../../components/header/Header'
import jwt_Decode from 'jwt-decode'
import { onSetCookieHandler, onSetLocalStorageHandler } from '../../util/cookie'

function Login() {
  const REST_API_KEY = `6cf4e324bddd5eed7f3aea4e47c14425`
  const REDIRECT_URI = `http://localhost:3000/api/kakao/callback`
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  const googleClientId =
    '69130861350-pgdr2fuj0j6dha2b943ka9436jc0tm73.apps.googleusercontent.com'
  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&response_type=code&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/userinfo.email`

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onClickLoginHandler = () => {
    if (!id || !password) return
    login({ id: id, password: password })
      .then((res) => {
        const authId = res.data.token
        const decodeUserInfo = JSON.stringify(jwt_Decode(authId))
        onSetCookieHandler('authorization', authId)
        onSetLocalStorageHandler('userInfo', decodeUserInfo)
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onKakaoLoginHandler = async () => {
    window.location.href = KAKAO_AUTH_URL
  }

  const onGoogleLoginHanlder = () => {
    window.location.assign(googleLoginUrl)
  }

  return (
    <>
      <Header />
      <div>
        <input
          type="text"
          placeholder="아이디"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => onClickLoginHandler()}>로그인</button>
      </div>

      <img
        src={kakao}
        alt="카카오 로그인"
        onClick={() => {
          onKakaoLoginHandler()
        }}
      />
      <button onClick={onGoogleLoginHanlder}>구글 로그인</button>
      <Footer />
    </>
  )
}

export default Login
