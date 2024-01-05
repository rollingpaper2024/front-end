import React from 'react'
import * as Styled from "./pocket.styled"

interface PocketIconProps {
    icon: React.ReactNode |string;
  }


function PocketIcon({icon}:PocketIconProps) {
  return (
    <Styled.SLayout>
      {typeof icon === 'string' ? <img src={icon} alt="Pocket Icon"/> : icon}
    </Styled.SLayout>
  )
}
// 추후 아이콘 확정시 코드 변경예정

export default PocketIcon