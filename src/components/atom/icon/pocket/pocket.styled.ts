import styled from 'styled-components'
import { Devices } from '@/style/Device'

interface SLayoutProps {
  isActiveImg: string
}

export const SLayout = styled.picture<SLayoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;

  @media ${Devices.tablet} {
    width: 100%
    height:auto;
    margin-top:12vh;
  }
`
