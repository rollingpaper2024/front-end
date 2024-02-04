import React from 'react'
import * as Styled from './mainitemlayout.styled'

interface GeneralLayoutProps {
  children: React.ReactNode
  text: string
}

const MainItemLayout: React.FC<GeneralLayoutProps> = ({ children, text }) => {
  return (
    <>
      <Styled.SLayout>
        <Styled.Sh1>{children}</Styled.Sh1>
        <Styled.SSLayout>{text}</Styled.SSLayout>
      </Styled.SLayout>
    </>
  )
}

export default MainItemLayout
