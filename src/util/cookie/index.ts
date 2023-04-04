import { Cookies } from 'react-cookie'


const cookie = new Cookies()
export const onGetCookieHandler = (name: string) => {
  return cookie.get(name)
}

export const onGetLocalStorage = (name: string) => {
  return localStorage.getItem(name)
}

export const onSetCookieHandler = (name: string, authId: string) => {
  return cookie.set(name, authId)
}

export const onSetLocalStorageHandler = (
  name: string,
  decodedUserInfo: any
) => {
  return localStorage.setItem(name, decodedUserInfo)
}

export const onLogoutHandler = (name:string) => {
    // 현재 쿠키를 전부 가져와서
    // 각 쿠키에 대한 만료일을 현재 날짜 이전으로 설정하여 쿠키를 삭제
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });
    window.location.reload()
    window.location.assign('/recommend')
}

export const onRemoveToken = () => {
  return localStorage.clear()
}

