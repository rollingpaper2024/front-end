import styled from 'styled-components'

interface titleProps {
  title: string
}

export const SLayout = styled.div<titleProps>`
  z-index: 1000001;
  background-color: white;
  border: 2px solid #ef961c;
  width: 100%;

  height: ${(props) => (props.title === 'button' ? '60px' : '')};
`
