import React, { useEffect } from 'react'
import queryString from 'query-string'
import axios from 'axios'

// 백엔드에 인가 코드 파싱할 페이지
function Auth() {
  console.log(123123123)
 
  const getCookie = (name:any) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`)
    if(parts.length === 2) return parts.pop()?.split(";").shift();
  }
  const fetchData = () => {
    const token = getCookie("token");
    if(token){
      axios.get(`http://15.165.18.86:3000/api/kakao` , {
        headers:{
          Authorization : `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log("api 응답", res.data)
      })
      .catch((error) => {
        console.log("api 요청 실패", error)
      })
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  // code=인가코드 형식
  // const code = window.location.search

  // 인가 코드만 추출
  // 인가 코드는 서버로 보낸다.
  // const code = new URL(window.location.href).searchParams.get('code')
  // console.log(code)



  return <div>카카오 로그인</div>
}

export default Auth
