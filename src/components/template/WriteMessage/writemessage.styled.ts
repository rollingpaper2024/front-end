import styled from 'styled-components'
import { Devices } from '@/style/Device'

export const SLayout = styled.div`
  width: 100%;
  padding: 0 28px;
  margin-top: -10vh;

  @media ${Devices.laptop} {
    margin-top: -6vh;
  }
`
