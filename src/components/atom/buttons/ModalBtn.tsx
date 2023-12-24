import React from 'react'
import * as Styled from './mainbtn.styled'

interface ModalBtnProps {
  title: string
  isDisabled: boolean
}

function ModalBtn({ title, isDisabled }: ModalBtnProps) {
  return (
    <>
      <Styled.SBtn $isDisabled={isDisabled}>{title}</Styled.SBtn>
    </>
  )
}

export default ModalBtn
