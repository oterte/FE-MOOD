import styled from 'styled-components'

export const SignupContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SignupForm = styled.form`
  padding: 0px 60px;
  border: 1px solid black;
`

export const SignupLabel = styled.label`
  font-size: 12px;
  color: gray;
  margin-right: 15px;
`

export const SignupInput = styled.input`
  padding: 15px;
  margin: 10px 0;
  width: 280px;
  border-radius: 5px;
  border: 1px solid gray;
`
export const SignupErrorSpan = styled.span``

export const SingupButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  background-color: gray;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 30px;
`
