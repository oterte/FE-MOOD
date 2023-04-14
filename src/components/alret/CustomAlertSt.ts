import styled from 'styled-components'

export const AlertWrapper = styled.div`
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;

  &.show {
    display: flex;
  }
`

export const AlertContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  text-align: center;
  width: 480px;
  height: 200px;
  font-size: 1.35rem;
  border-radius: 5px;

  p {
    padding-bottom: 15px;
    color: black;
  }
`

export const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginButton = styled.button`
  font-weight: bold;
  cursor: pointer;
  width: 200px;
  height: 50px;
  font-size: 1.2rem;
  border-radius: 5px;
  margin-right: 10px;
  border: none;
  background: #e6c177;
  color: white;
  line-height: 50px;

  .icon {
    position: absolute;
    top: 150px;
    left: 100px;
  }
`

export const CloseButton = styled.button`
  background-color: white;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background: #bdbdbd;
  border: none;
  width: 200px;
  height: 50px;
  font-size: 1.2rem;
  border-radius: 5px;
`
