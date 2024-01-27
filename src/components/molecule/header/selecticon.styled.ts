import styled from 'styled-components'
import { Devices } from '@/style/Device'

export const SLayout = styled.div`
  width: 40%;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 16px;
  svg {
    cursor: pointer;
  }
  position: relative;
`
export const STooltipDiv = styled.div`
  width: 100%;
  position: absolute;
  top: 9vh;
  display: flex;
  justify-content: flex-end;

  @media ${Devices.tablet} {
    top: 7vh;
  }
`
export const STooltipCloseDiv = styled.div`
  position: absolute;
  top: 10.7vh;
  /* left: translateX(-60%); */
  transform: translateX(-75%);
  @media ${Devices.tablet} {
    top: 9vh;
  }
`
export const SSpan = styled.span`
  color: #fffefc;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 100% */
  letter-spacing: -0.14px;
  text-transform: capitalize;
  position: absolute;
  top: 10.8vh;
  transform: translateX(-28%);
  @media ${Devices.tablet} {
    top: 9.2vh;
  }
`
