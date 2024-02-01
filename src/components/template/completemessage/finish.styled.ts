import styled from 'styled-components'
import { Devices } from '@/style/Device'

export const SWrapper = styled.div`
  width: 80%;
  height: auto;
  padding: 0 10px;

  @media ${Devices.laptop} {
    margin-top: 7vh;
  }
`
