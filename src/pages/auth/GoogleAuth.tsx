function GoogleAuth() {
    const parsedHash = new URLSearchParams(window.location.hash.substring(1))
    const accessToken = parsedHash.get("access_token")
  return (
    <div>GoogleAuth</div>
  )
}

export default GoogleAuth