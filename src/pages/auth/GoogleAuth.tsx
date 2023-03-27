import React from 'react'

function GoogleAuth() {
    const parsedHash = new URLSearchParams(window.location.hash.substring(1))
    console.log(parsedHash)
    const accessToken = parsedHash.get("access_token")
    console.log(accessToken)

    // 여기서 이제 useEffect 사용해서 accessToken 백으로 넘겨주고,
    // 받아온 jwt 토큰 로컬에 저장
  return (
    <div>GoogleAuth</div>
  )
}

export default GoogleAuth