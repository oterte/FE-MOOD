import  { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { onSetLocalStorageHandler } from '../../util/cookie'
import jwtDecode from 'jwt-decode'
function Auth() {
  const code = new URL(window.location.href).searchParams.get('code')
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/api/login/kakao`, {code})
      .then((r) => {
        const token: string = r.data.access_token
        const decodeUserInfo = JSON.stringify(jwtDecode(token))
        const profileUrl = r.data.profileUrl
        const nickname: string = r.data.nickname
        const refresh = r.data.refresh_token
        onSetLocalStorageHandler('img', profileUrl)
        onSetLocalStorageHandler('refresh', refresh)
        onSetLocalStorageHandler('accessToken', token)
        onSetLocalStorageHandler('nickname', nickname)
        onSetLocalStorageHandler('userInfo', decodeUserInfo)
        alert(r.data.message)
        navigate('/recommend')
      })
      .catch((err) => {
        alert(err.response.data.message)
        navigate('/login')
      })
  }, [])

  return <div>카카오 로그인 로딩중...</div>
}

export default Auth
