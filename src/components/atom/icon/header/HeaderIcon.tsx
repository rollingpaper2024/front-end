import React from 'react'
import * as Styled from './header.styled'

interface HeaderIconProps {
  icon: React.ReactNode
  isDisableCoachmark?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function HeaderIcon({ icon, isDisableCoachmark,onClick }: HeaderIconProps) {
  return <Styled.SIconDiv isDisableCoachmark={isDisableCoachmark}>{icon}</Styled.SIconDiv>
}

export default HeaderIcon
