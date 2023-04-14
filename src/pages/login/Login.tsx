import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../api/loginapi'
import kakao from '../../assets/images/kakao_login_large_wide.png'
import Header from '../../components/header/Header'
import jwt_Decode from 'jwt-decode'
import { onSetCookieHandler, onSetLocalStorageHandler } from '../../util/cookie'
import {
  KakaoLoginBtn,
  KakaoLoginImg,
  LoginBtn,
  LoginContainer,
  LoginContainerForm,
  LoginInput,
  LoginInputDiv,
  LoginLabelDiv,
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
        const authId = res.data.accessToken
        const nickname = res.data.nickname
        const profileUrl = res.data.profileUrl
        const decodeUserInfo = JSON.stringify(jwt_Decode(authId))
        const refreshToken = res.data.refreshToken
        onSetCookieHandler('accessToken', authId)
        onSetLocalStorageHandler('img', profileUrl)
        onSetLocalStorageHandler('accessToken', authId)
        onSetLocalStorageHandler('nickname', nickname)
        onSetLocalStorageHandler('refresh', refreshToken)
        onSetLocalStorageHandler('userInfo', decodeUserInfo)
        alert(res.data.message)
        navigate('/')
        alert(nickname + "님 환영합니다.")
      })
      .catch(() => {
        alert('아이디 비밀번호가 일치하지 않습니다.')
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
        <p>Log in</p>
        {/* <span
          onClick={() => {
            navigate('/signup')
          }}
        >
          MOOD 회원이 아니신가요?
        </span> */}
        <LoginContainerForm>
          <div>
            <LoginLabelDiv>
              <label>아이디</label>
            </LoginLabelDiv>
            <LoginInputDiv>
              <LoginInput
                type="text"
                placeholder="아이디를 입력하세요."
                name="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </LoginInputDiv>
          </div>
          <div>
            <LoginLabelDiv>
              <label>비밀번호</label>
            </LoginLabelDiv>
            <LoginInputDiv>
              <LoginInput
                type="password"
                placeholder="비밀번호를 입력하세요"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </LoginInputDiv>
          </div>
          <LoginBtn onClick={(e) => onClickLoginHandler(e)}>Log in</LoginBtn>
          <LoginBtn onClick={() => navigate('/signup')}>Sign Up</LoginBtn>
        </LoginContainerForm>
        <LoginSocialContainer>
          <KakaoLoginImg
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
