import styled from 'styled-components'
import { Devices } from '@/style/Device'
import { Fontsize, Fontweight } from '@/style/font'

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
export const Sh1 = styled.h1`
  font-size: ${Fontsize.Large};
  font-weight: ${Fontweight.Bold};
`

export const SSLayout = styled.div`
  width: 100%;
  text-align: center;
  font-weight: ${Fontweight.Medium};
`
