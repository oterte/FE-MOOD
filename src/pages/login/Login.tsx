import { useState } from 'react'
import { Cookies, useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { login } from '../../api/loginapi'
import Footer from '../../components/footer/Footer'

function Login() {
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
        setCookies('authorization', authId)
        console.log('로그인에 성공했습니다.')
      })
      .catch((error) => {
        console.log(error)
      })
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
      <Footer />
    </>
  )
}

export default Login
