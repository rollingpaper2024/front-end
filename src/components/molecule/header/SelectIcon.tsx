import React from 'react'
import * as Styled from "./selecticon.styled"
import HeaderIcon from '@/components/atom/icon/header/HeaderIcon'
import ActiveHeaderIcon from "@/img/HeaderIcon"

function SelectIcon() {
  return (
    <Styled.SLayout>
      <HeaderIcon icon={<ActiveHeaderIcon />} />
      <HeaderIcon icon={<ActiveHeaderIcon />} />
      <HeaderIcon icon={<ActiveHeaderIcon />} />
      {/* 추후 아이콘 확정되면 바뀔예정 */}
    </Styled.SLayout>
  )
}

export default SelectIcon