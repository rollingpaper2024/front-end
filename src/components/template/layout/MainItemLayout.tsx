import React from 'react'
import * as Styled from "./mainitemlayout.styled"

interface GeneralLayoutProps {
  children: React.ReactNode;
}

const MainItemLayout: React.FC<GeneralLayoutProps> = ({ children }) => {

    return (
    <Styled.SLayout>{children}</Styled.SLayout>
  )
  
}

export default MainItemLayout