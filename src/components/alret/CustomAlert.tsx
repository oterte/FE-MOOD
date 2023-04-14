import React, { useEffect } from 'react'
import {
  AlertContent,
  AlertWrapper,
  Btn,
  CloseButton,
  LoginButton,
} from './CustomAlertSt'
import { Link } from 'react-router-dom'
import { FcLock } from 'react-icons/fc'

interface CustomAlertProps {
  showAlert: boolean
  onHide: () => void
  message: string
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  showAlert,
  onHide,
  message,
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
      {' '}
      <AlertContent>
        <p>{message}</p>
        <Btn>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <LoginButton>
              <FcLock size="28" className="icon" /> &nbsp; 로그인
            </LoginButton>
          </Link>
          <CloseButton>닫기</CloseButton>
        </Btn>
      </AlertContent>
    </AlertWrapper>
  )
}

export default CustomAlert
