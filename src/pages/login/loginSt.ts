import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  width: 600px;
  height: 685px;
  margin: auto;
  margin-top: 50px;
  border: 1px solid #8b7d76;
  p{
    font-family: var(--font-NotoSerifKR);
    font-style: normal;
    font-size: 32px;
    font-weight: 700;
    line-height: 46px;
  }
  span{
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-bottom:25px;
    color: #4B372E;
  }
`
export const LoginContainerForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginLabelDiv = styled.div`
  width:125px;
  height:24px;
  font-style:normal;
  font-weight:400;
  font-size:16px;
  line-height:23px;
  color:#000000;
`

export const LoginInputDiv = styled.div`
  margin:auto;
`
export const LoginInput = styled.input`
  width: 430px;
  height: 45px;
  background-color: #f4f4f4;
  border: 2px solid #4b372e;
  margin-top: 10px;
  margin-bottom:25px;
`
export const LoginBtn = styled.button`
  width: 430px;
  height: 50px;
  background-color: #4b372e;
  border: none;
  margin-top: 25px;
  color: #ffffff;
  cursor: pointer;
`

export const LoginSocialContainer = styled.div`
  margin-top: 25px;
  cursor: pointer;
`
export const KakaoLoginImg = styled.img`
  width: 430px;
  height: 50px;
  object-fit: cover;
`
export const KakaoLoginBtn = styled.button`
  width: 430px;
  height: 50px;
  background-color: #FEE500;
  color: #000000 85%;
  font-size: 16px;
  font-style: normal;
  border: none;
  cursor: pointer;
`