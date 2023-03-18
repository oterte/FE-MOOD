import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Auth() {
  const code = new URL(window.location.href).searchParams.get('code')
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_KAKAO_SERVER}/api/kakao/login`, { code })
      .then((r) => {
        const data: string = r.data.access_token
        const nickname: string = r.data.nickname
        localStorage.setItem('token', data)
        localStorage.setItem('nickname', nickname)
        navigate('/')
      })
  }, [])

  return <div>카카오 로그인</div>
}

export default Auth
