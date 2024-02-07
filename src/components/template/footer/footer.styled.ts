import styled from 'styled-components'
import * as Font from '@/style/font'
import { Devices } from '@/style/Device'

export const SLayout = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 1vh;
  font-size: ${Font.Fontsize.XSmall};
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px;
  background: transparent;
  justify-content @media ${Devices.tablet} {
    bottom: -1.5vh;
  }
`
