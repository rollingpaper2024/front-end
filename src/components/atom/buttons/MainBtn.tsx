import React from 'react'
import * as Styled from "./mainbtn.styled"

interface MainBtnProps {
    isDisabled: boolean;
  }

function MainBtn({isDisabled}:MainBtnProps) {
  return (
    <Styled.SBtn $isDisabled={isDisabled}>MainBtn</Styled.SBtn>
  )
}

export default MainBtn