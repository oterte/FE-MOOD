import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { onSetLocalStorageHandler } from '../../util/cookie'
import jwtDecode from 'jwt-decode'
function Auth() {
  const code = new URL(window.location.href).searchParams.get('code')
  console.log(code)
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/api/login/kakao`, {code})
      .then((r) => {
        const data: string = r.data.access_token
        const decodeUserInfo = JSON.stringify(jwtDecode(data))
        const nickname: string = r.data.nickname
        const refresh = r.data.refresh_token
        onSetLocalStorageHandler('refresh', refresh)
        onSetLocalStorageHandler('authorization', data)
        onSetLocalStorageHandler('nickname', nickname)
        onSetLocalStorageHandler('userInfo', decodeUserInfo)
        console.log("로그인 성공")
        navigate('/recommend')
      })
      .catch((err) => {
        console.log(err)
        alert(err.response.data.message)
        navigate('/login')
      })
  }, [])

  return <div>카카오 로그인 로딩중...</div>
}

export default Auth
