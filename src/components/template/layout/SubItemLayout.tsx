import React from 'react'
import * as Styled from './mainitemlayout.styled'

interface GeneralLayoutProps {
  children: React.ReactNode
}
const SubItemLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  return <Styled.SSLayout>{children}</Styled.SSLayout>
}

export default SubItemLayout
