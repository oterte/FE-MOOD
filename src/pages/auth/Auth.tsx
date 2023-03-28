import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { onSetLocalStorageHandler } from '../../util/cookie'

import jwtDecode from 'jwt-decode'

function Auth() {
  const code = new URL(window.location.href).searchParams.get('code')
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/api/kakao/login`, { code })
      .then((r) => {
        const data: string = r.data.access_token
        const decodeUserInfo = JSON.stringify(jwtDecode(data))
        const nickname: string = r.data.nickname
        onSetLocalStorageHandler('authorization', data)
        onSetLocalStorageHandler('nickname', nickname)
        onSetLocalStorageHandler('userInfo', decodeUserInfo)

        navigate('/')
      })
      .catch((err) => {
        alert(err.response.data.message)
        navigate("/login")
      })
  }, [])

  return <div>카카오 로그인</div>
}

export default Auth
