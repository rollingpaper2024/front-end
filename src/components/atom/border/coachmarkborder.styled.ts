import styled from 'styled-components'
import Color from '@/style/Color'

interface titleProps {
  title: string
}

export const SLayout = styled.div<titleProps>`
  z-index: 1000001;
  background-color: ${Color.white};
  border: 2px solid ${Color.pointColor};
  width: 100%;

  height: ${(props) => (props.title === 'button' ? '60px' : '')};
`
