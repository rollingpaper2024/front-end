import styled from 'styled-components'
import { Fontsize, Fontweight } from '@/style/font'
import Color from '@/style/Color'
import { Devices } from '@/style/Device'

export const STitleH1 = styled.h1`
  color: ${Color.gray[600]};
  font-family: Pretendard;
  font-size: ${Fontsize.Middle};
  font-style: normal;
  font-weight: ${Fontweight.Bold};
  line-height: 32px;
  letter-spacing: -0.24px;
  text-transform: capitalize;
  white-space: nowrap;
  margin: 0px;
  margin-bottom: 5px;
  margin-left: 24px;

  @media ${Devices.mobileS} {
    font-size: ${Fontsize.Small};
    margin-left: 0px;
  }
`
