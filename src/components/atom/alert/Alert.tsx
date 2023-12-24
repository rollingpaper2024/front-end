import React from 'react'
import * as Styled from './alert.styled'

interface AlertProps {
  number: number
}

// toastify 커스텀하기
function Alert({ number }: AlertProps) {
  return <Styled.Alert>{number}개의 덕담이 도착했어요</Styled.Alert>
}

export default Alert
