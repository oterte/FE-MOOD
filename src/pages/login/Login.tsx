import { useState, useEffect } from 'react'
import { Cookies, useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { kakaoLogin, login } from '../../api/loginapi'
import Footer from '../../components/footer/Footer'
import kakao from '../../assets/kakao_login_large_narrow.png'
import jwtDecode from 'jwt-decode'

function Login() {
  // const REST_API_KEY = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`
  // const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`
  const REST_API_KEY = `6cf4e324bddd5eed7f3aea4e47c14425`
  const REDIRECT_URI = `http://localhost:3000/api/kakao/callback`
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
  
  
  const googleClientId = '69130861350-pgdr2fuj0j6dha2b943ka9436jc0tm73.apps.googleusercontent.com'
  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&response_type=code&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/userinfo.email`
  
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [cookies, setCookies] = useCookies(['authorization'])
  const navigate = useNavigate()

  const onClickLoginHandler = () => {
    if (!id || !password) return
    login({ id: id, password: password })
      .then((res) => {
        console.log(res)
        const authId = res.data.token
        const decodedToken:any = jwtDecode(authId)
        setCookies('authorization', authId)
        localStorage.setItem("token", decodedToken)
        console.log('로그인에 성공했습니다.')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onKakaoLoginHandler = async () => {
    // window.location.href = `http://15.165.18.86:3000/api/kakao/callback`
    window.location.href = KAKAO_AUTH_URL
    // kakaoLogin()
  }

  const onGoogleLoginHanlder= () => {
    window.location.assign(googleLoginUrl)
    
  }

  return (
    <>
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

      <img src={kakao} alt="카카오 로그인" onClick={() => {onKakaoLoginHandler()}}/>
      <button onClick={onGoogleLoginHanlder}>구글 로그인</button>
      <Footer />
    </>
  )
}

export default Login
