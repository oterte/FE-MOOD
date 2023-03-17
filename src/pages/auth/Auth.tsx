import React, { useEffect } from 'react'
import queryString from 'query-string'
import axios from 'axios'

// 백엔드에 인가 코드 파싱할 페이지
function Auth() {
  // 인가 코드만 추출a
  // 인가 코드는 서버로 보낸다.
  const code = new URL(window.location.href).searchParams.get('code')
  console.log(code)

  
 



  return <div>카카오 로그인</div>
}

export default Auth
