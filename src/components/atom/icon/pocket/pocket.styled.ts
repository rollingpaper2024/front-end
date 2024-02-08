import styled from 'styled-components'
import { Devices } from '@/style/Device'

export const SLayout = styled.picture`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  width:500px;
  height:360px;
  @media ${Devices.tablet} {
    width: 100%
    height:auto;
    margin-top:12vh;
  }
`
