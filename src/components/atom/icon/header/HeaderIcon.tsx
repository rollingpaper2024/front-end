import React from 'react'
import * as Styled from './header.styled'

interface HeaderIconProps {
  icon: React.ReactNode
  isDisableCoachmark?: boolean
}

function HeaderIcon({ icon, isDisableCoachmark }: HeaderIconProps) {
  console.log("왜안돼?",isDisableCoachmark)
  return <Styled.SIconDiv isDisableCoachmark={isDisableCoachmark}>{icon}</Styled.SIconDiv>
}

export default HeaderIcon
