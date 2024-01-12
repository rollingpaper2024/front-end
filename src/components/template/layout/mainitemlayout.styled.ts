import styled from 'styled-components'
import { Devices } from '@/style/Device'

export const SLayout = styled.article`
  width: 100%;
  height: 42vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${Devices.tablet} {
    height: 42vh;
  }
`
