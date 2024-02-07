import * as Styled from './background.styled'

interface BackGroundProps {
  children: React.ReactNode
}

function BackGround({ children }: BackGroundProps) {
  return <Styled.SLayout>{children}</Styled.SLayout>
}

export default BackGround
