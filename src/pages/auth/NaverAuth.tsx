function NaverAuth() {
    const code = new URL(window.location.href).searchParams.get('code')


  return (
    <div>NaverAuth</div>
  )
}

export default NaverAuth