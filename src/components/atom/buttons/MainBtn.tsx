import React from 'react'
import * as Styled from './mainbtn.styled'

interface MainBtnProps {
  title: string
  isDisabled: boolean
}

function MainBtn({ title, isDisabled }: MainBtnProps) {
  return <Styled.SBtn $isDisabled={isDisabled}>{title}</Styled.SBtn>
}

export default MainBtn
