import styled from 'styled-components'
import { Devices } from '@/style/Device'

interface Props {
  isWriteMessage: boolean
}

export const SLayout = styled.div<Props>`
  width: ${(props) => (props.isWriteMessage ? '100%' : '40%')};
  height: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  svg {
    cursor: pointer;
  }
  position: relative;
`
export const SBackDiv = styled.div<{ isUser: boolean }>`
  width: ${(props) => (props.isUser ? '100%' : '50%')};
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: ${(props) => (props.isUser ? '0' : '18px')};
`
export const SCheckDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`
export const STooltipDiv = styled.div`
  width: 100%;
  position: absolute;
  /* top: 9vh; */
  top: -5px;
  right: 0px;
  display: flex;
  justify-content: flex-end;

  /* @media ${Devices.tablet} {
    top: 7vh;
  } */
`
export const STooltipCloseDiv = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
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
  top: 12px;
  right: 32px;
  /* transform: translateX(-1%); */
  @media ${Devices.tablet} {
    /* top: 9.2vh; */
  }
`
export const SAlertDiv = styled.div`
  position: absolute;
  top: 6vh;
`
export const STooltipLayout = styled.div`
  width: 161px;
  height: 40px;
  padding: 12px 10px;
  position: absolute;
  top: 7.5vh;
  z-index: 100;

  @media ${Devices.tablet} {
    top: 6.8vh;
  }
`
export const SMessageListDiv = styled.div`
  width: 100%;
  display: flex;
`
export const SDeleteIconDiv = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  padding-right: 18px;
`
