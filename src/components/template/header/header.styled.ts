import styled from 'styled-components'
import { Devices } from '@/style/Device'

export const SLayout = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;

  @media ${Devices.tablet} {
    height: 8vh;
  }
`
