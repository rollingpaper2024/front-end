import React from 'react'
import * as Styled from './btnarea.styled'
import MainBtn from '@/components/atom/buttons/MainBtn'
import { useAtom } from 'jotai'
import { coachMarkAtom } from '@/store/coachmark'

interface btnAreaType {
  title: string
  isDisabled: boolean
  onClick?: () => void
}

function BtnArea({ title, isDisabled, onClick }: btnAreaType) {
  const [isDisableCoachmark] = useAtom(coachMarkAtom)
  return (
    <Styled.SLayout showCoachMark={!isDisableCoachmark}>
      <MainBtn
        title={title}
        isDisabled={isDisabled}
        onClick={onClick}
        isDisableCoachmark={isDisableCoachmark}
      />
    </Styled.SLayout>
  )
}

export default BtnArea
