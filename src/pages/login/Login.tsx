import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../api/loginapi'
import kakao from '../../assets/kakao_login_large_narrow.png'
import Header from '../../components/header/Header'
import jwt_Decode from 'jwt-decode'
import { onSetCookieHandler, onSetLocalStorageHandler } from '../../util/cookie'
import {
  LoginBtn,
  LoginContainer,
  LoginInput,
  LoginSocialContainer,
} from './loginSt'

function Login() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`

  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.profile`
  const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}&state=random_string`

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onClickLoginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    login({ id: id, password: password })
      .then((res) => {
        console.log('res', res)
        const authId = res.data.accessToken
        const decodeUserInfo = JSON.stringify(jwt_Decode(authId))
        const refreshToken = res.data.refreshToken
        onSetCookieHandler('authorization', authId)
        onSetLocalStorageHandler('refresh', refreshToken)
        onSetLocalStorageHandler('authorization', authId)
        onSetLocalStorageHandler('userInfo', decodeUserInfo)
        alert(res.data.message)
        navigate('/recommend')
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  const onKakaoLoginHandler = async () => {
    window.location.href = KAKAO_AUTH_URL
  }

  const onGoogleLoginHanlder = () => {
    window.location.assign(googleLoginUrl)
  }
  const onNaverLoginHandler = () => {
    window.location.href = naverLoginUrl
  }
  return (
    <>
      <Header />
      <LoginContainer>
        <p>로그인</p>
        <span
          onClick={() => {
            navigate('/signup')
          }}
        >
          MOOD 회원이 아니신가요?
        </span>
        <form>
          <LoginInput
            type="text"
            placeholder="아이디를 입력하세요."
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <LoginInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginBtn onClick={(e) => onClickLoginHandler(e)}>
            로그인 하기
          </LoginBtn>
        </form>
        <LoginSocialContainer>
          <img
            src={kakao}
            alt="카카오 로그인"
            onClick={() => {
              onKakaoLoginHandler()
            }}
          />
        </LoginSocialContainer>
      </LoginContainer>

      {/* <button onClick={onGoogleLoginHanlder}>구글 로그인</button>
      <button onClick={onNaverLoginHandler}>네이버 로그인</button> */}
    </>
  )
}

export default Login
