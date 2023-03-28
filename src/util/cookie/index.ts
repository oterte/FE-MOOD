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
    return cookie.remove(name)
}

export const onRemoveToken = () => {
  return localStorage.clear()
}

