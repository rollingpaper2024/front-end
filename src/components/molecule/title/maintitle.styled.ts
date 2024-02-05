import styled from 'styled-components'
import { Devices } from '@/style/Device'

export const SLayout = styled.section`
  width: 100%;
  height: 118px;
  margin-top: 24px;
  // padding-left: 24px;

  @media ${Devices.tablet} {
    height: 10vh;
    padding: 5px 10px;
  }
`
