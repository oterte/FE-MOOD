import React from 'react'



function NaverAuth() {
    const code = new URL(window.location.href).searchParams.get('code')
    console.log(code)


  return (
    <div>NaverAuth</div>
  )
}

export default NaverAuth