import { ReactNode } from "react";
import * as Styled from "./layout.styled" 

function Layout({ children }: { children: ReactNode }) {
  return (
    <Styled.SLayout>{children}</Styled.SLayout>
  )
}

export default Layout