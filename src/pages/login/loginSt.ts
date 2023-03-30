import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  width: 749px;
  height: 685px;
  margin: auto;
  border: 1px solid #8b7d76;
  p{
    font-style: normal;
    font-size: 32px;
    font-weight: 500;
    line-height: 46px;
  }
  span{
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`
export const LoginInput = styled.input`
  width: 551px;
  height: 45px;
  background-color: #f4f4f4;
  border: 2px solid #4b372e;
  margin-left: 100px;
  margin-top: 25px;
`
export const LoginBtn = styled.button`
  width: 551px;
  height: 60px;
  background-color: #4b372e;
  margin-left: 100px;
  margin-top: 25px;
  color: #ffffff;
  cursor: pointer;
`

export const LoginSocialContainer = styled.div`
  margin-top: 50px;
  cursor: pointer;
`
