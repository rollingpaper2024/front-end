import React from 'react'
import * as Styled from './header.styled'

interface HeaderIconProps {
  icon: React.ReactNode
  isDisableCoachmark?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
  id?: string
}

function HeaderIcon({ icon, isDisableCoachmark, onClick, id }: HeaderIconProps) {
  return (
    <Styled.SIconDiv id={id} onClick={onClick} isDisableCoachmark={isDisableCoachmark}>
      {icon}
    </Styled.SIconDiv>
  )
}

export default HeaderIcon
