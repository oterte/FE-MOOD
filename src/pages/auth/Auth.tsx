import React, { useEffect } from 'react'
import queryString from 'query-string'
import axios from 'axios'

// 백엔드에 인가 코드 파싱할 페이지
function Auth() {
  const REST_API_KEY = 'b6ab598ca4e59d8a6b952bbef8fb2406'
  const REDIRECT_URI = 'http://localhost:3000/user/kakao/callback'

  // code=인가코드 형식
  // const code = window.location.search

  // 인가 코드만 추출
  // 인가 코드는 서버로 보낸다.
  const code = new URL(window.location.href).searchParams.get('code')
  console.log(code)

  
  // 토큰 localStorage에 저장
  // const onGetkakaoToken = () => {
  //   // fetch는 너무 느리다.
  //   fetch(`https://kauth.kakao.com/oauth/token`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri${REDIRECT_URI}&code=${code}`,
  //   })
  //     .then((res) => 
  //           res.json())
  //     .then((data) => {
  //       // data.access_token ->  이게 토큰
  //       if (data.access_token) {
  //         // 토큰을 백에 보내준다면, 이 부분에서 서버로 토큰을 보내주는 로직을 작성해야 함
  //         console.log(data)
  //         localStorage.setItem('token', data.access_token)
  //         return data
  //       } else {
  //         console.log('잘못된 시도')
  //       }
  //     })
  // }

  const onGetTokenHanlder = async (code:any) => {
    const grantType = 'authorization_code'
    const res = await axios.post (
      `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
     {
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
     }
    )
    const token = res.data
    console.log(token)
    const data = token.access_token
    if(data){
      console.log(data)
      axios.post("https://kapi.kakao.com/v2/user/me" , {},
      {
        headers : {
          Authorization: `Bearer ${data}`,
          "Content-Type" : "application/x-www-form-urlencoded"
        }
      }).then((res) => {
        console.log("데이터  :" , res)
      })
    }else{
      console.log("데이터 실패")
    }
    return token
  }
  
  
// 코드 또는 토큰을 서버에 보내줄 수 있다
// 프론트는 보내주는거 까지만 가능?
  useEffect(() => {
    // onGetkakaoToken()
    onGetTokenHanlder(code)
    
  }, [])

  return <div>카카오 로그인</div>
}

export default Auth
