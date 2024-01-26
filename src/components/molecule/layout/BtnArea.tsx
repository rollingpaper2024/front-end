import React from 'react'
import * as Styled from './btnarea.styled'
import MainBtn from '@/components/atom/buttons/MainBtn'

interface btnAreaType {
  title: string
  isDisabled: boolean
  onClick?: () => void
}

function BtnArea({ title, isDisabled, onClick }: btnAreaType) {
  return (
    <Styled.SLayout>
      <MainBtn title={title} isDisabled={isDisabled} onClick={onClick} />
    </Styled.SLayout>
  )
}

export default BtnArea
