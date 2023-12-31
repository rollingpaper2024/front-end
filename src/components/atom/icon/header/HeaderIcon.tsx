import React from 'react'
import * as Styled from "./header.styled"

interface HeaderIconProps {
    icon: React.ReactNode;
  }

function HeaderIcon({icon}:HeaderIconProps) {
  return (
    <Styled.SIconDiv>
    {icon}  
    </Styled.SIconDiv>
  )
}

export default HeaderIcon