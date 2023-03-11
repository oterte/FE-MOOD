import axios from 'axios'
import { instance } from './instance'

interface UserInfo{
    id?:string,
    email?:string,
    nickname?:string,
    password?:string,
    confirm?:string
}

const register = async ({id, email, nickname, password, confirm}:UserInfo) => {
    console.log(id, email, nickname, password, confirm)
    const response = await instance.post('/api/signup' ,
    {
        id,
        password,
        email,
        nickname,
        confirm
    })
    console.log(response)
    return response
}

const checkId = async (id?:string) => {
    console.log(id)
    const response = await instance.post('/api/idcheck', id)
    return response
}

const checkNickname = async (nickname?:string) => {
    const response = await instance.post('/api/nicknamecheck' ,nickname)
    return response
}