import styled from 'styled-components'

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  width: 800px;
  height: 1000px;
  margin: auto;
  border: 1px solid #8b7d76;
  text-align: center;
  margin-top:50px;
  p{
    margin: auto;
    font-family: var(--font-NotoSerifKR);
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 46px;
    margin-bottom: 15px;
  }
  span{
    font-style: normal;
    font-family: var(--font-NotoSansKr);
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color:#000000;
    cursor: pointer;
    margin-top: 15px;
  }
`
export const SpanDiv = styled.div`
  margin-bottom: 25px;
`
export const SignupForm = styled.form`
`
export const SignupErrorDiv = styled.div`
  width: 100%;
  margin-top: -10px;
  text-align: left;
  span{
    font-size: 15px;
  }
`
export const SignupLabelDiv = styled.div`
 width: 276px;
  height: 27px;
  font-style: normal;
  font-weight: 400;
  font-size:16px;
  line-height: 24px;
  color: #000000;
  display: block;
  margin-bottom: px;
  text-align: left;
`
export const SignupLabel = styled.label`
  width: 276px;
  height: 27px;
  font-style: normal;
  font-weight: 400;
  font-size:16px;
  line-height: 24px;
  color: #000000;
  display: block;
`
export const SignupDiv = styled.div`
  width: 100%;
`
export const InputDiv = styled.div`
  width: 80%;
  display: flex;
  margin-top: 15px;
`

export const SignupInput = styled.input`
  width: 276px;
  height: 45px;
  background-color: #f4f4f4;
  border: 2px solid #8b7d76;
  margin-bottom: 25px;
`
export const SignupInputTwo = styled.input`
  width: 430px;
  height: 45px;
  background-color: #f4f4f4;
  border: 2px solid #8b7d76;
  margin-bottom: 25px;
`

export const SignupErrorSpan = styled.span`
  font-size: 13px;
`

export const SignupCheckBtn = styled.button`
  width: 144px;
  height: 45px;
  background-color: #8b7d76;
  border: 1px solid #8b7d76;
  margin-left: 20px;
  cursor: pointer;
  color: #ffffff;
`
export const SingupButton = styled.button`
  width: 432px;
  height: 50px;
  background-color: #4b372E;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 30px;
  border: none;
`
export const SingupButtonDisabled = styled.button`
  width: 432px;
  height: 50px;
  background-color: gray;
  color: white;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 30px;
  border: none;
`
