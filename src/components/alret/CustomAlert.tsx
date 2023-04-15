import React, { useEffect } from 'react'
import {
  AlertContent,
  AlertWrapper,
  Btn,
  CloseButton,
  LoginButton,
} from './CustomAlertSt'
import { Link } from 'react-router-dom'

interface CustomAlertProps {
  showAlert: boolean
  onHide: () => void
  message: string
  loginState: boolean
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  showAlert,
  onHide,
  message,
  loginState,
}) => {
  useEffect(() => {
    if (showAlert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [showAlert])

  return (
    <AlertWrapper
      className={`custom-alert${showAlert ? ' show' : ''}`}
      onClick={onHide}
    >
      <AlertContent>
        <p>{message}</p>
        <Btn>
          {loginState ? (
            <>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <LoginButton>로그인</LoginButton>
              </Link>
              <CloseButton>닫기</CloseButton>
            </>
          ) : (
            <CloseButton>닫기</CloseButton>
          )}
        </Btn>
      </AlertContent>
    </AlertWrapper>
  )
}

export default CustomAlert
