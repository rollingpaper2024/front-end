import React from 'react'
import * as Styled from './header.styled'

interface HeaderIconProps {
  icon: React.ReactNode
  isDisableCoachmark?: boolean
}

function HeaderIcon({ icon, isDisableCoachmark }: HeaderIconProps) {
  return <Styled.SIconDiv isDisableCoachmark={isDisableCoachmark}>{icon}</Styled.SIconDiv>
}

export default HeaderIcon
