import styled from 'styled-components'
import { Fontsize } from '@/style/font'
import { Devices } from '@/style/Device'
import Color from '@/style/Color'

export const SDesc = styled.p`
  color: ${Color.gray[600]};
  font-family: Pretendard;
  font-size: ${Fontsize.Small};
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;
  text-transform: capitalize;
  white-space: nowrap;
  margin-left: 24px;
  white-space: break-spaces;

  @media ${Devices.mobileS} {
    font-size: ${Fontsize.Tiny};
    margin-left: 0px;
  }
`
