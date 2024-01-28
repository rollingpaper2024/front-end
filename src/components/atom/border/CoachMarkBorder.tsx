import React from 'react'
import * as Styled from './coachmarkborder.styled'

interface GeneralLayoutProps {
  children: React.ReactNode
  title: string
  name: string
}

function CoachMarkBorder({ children, title, name }: GeneralLayoutProps) {
  if (name !== 'coach_mark') {
    return
  }
  return <Styled.SLayout title={title}>{children}</Styled.SLayout>
}

export default CoachMarkBorder
