import styled from 'styled-components'
import Color from '@/style/Color'
import * as Font from '@/style/font'
import { Devices } from '@/style/Device'

export const SHightLightFirstTextDiv = styled.div`
  height: 15px;
  z-index: 1000001;
  display: flex;
  position: absolute;
  right: 15px;
  p {
    font-size: ${Font.Fontsize.Small};
    font-weight: ${Font.Fontweight.Medium};
    color: ${Color.white};
  }
  span {
    color: ${Color.pointColor};
  }
`
export const SHightLightSecondTextDiv = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  z-index: 1000001;
  color: #fffefc;
  text-align: center;
  p {
    font-size: ${Font.Fontsize.Small};
    font-weight: ${Font.Fontweight.Medium};
    color: ${Color.white};
  }

  @media ${Devices.mobileS} {
    p {
      font-size: ${Font.Fontsize.Tiny};
    }
  }
`

export const SCloseDiv = styled.div`
  cursor: pointer;
  z-index: 1000001;
  display: flex;
  color: #fffefc;
  font-family: Pretendard;
  font-size: ${Font.Fontsize.Small};
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;
  text-transform: capitalize;
  position: absolute;
  top: 95%;
  right: 12px;
  h6 {
    margin-right: 5px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`
