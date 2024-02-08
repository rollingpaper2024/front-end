import Color from '@/style/Color'
import styled from 'styled-components'
import * as Font from '@/style/font'
import { Devices } from '@/style/Device'

export const SBtn = styled.button<{ $isDisabled: boolean; isDisableCoachmark?: boolean }>`
  position: absolute;
  bottom: 9vh;
  background-color: ${(props) => (props.$isDisabled ? Color.gray[500] : Color.gray[600])};
  height: 56px;
  width: 80%;
  color: ${Color.yellow[300]};
  font-size: ${Font.Fontsize.Small};
  font-weight: ${Font.Fontweight.Bold};
  overflow: hidden;
  z-index: 1000001;
  border: ${(props) =>
    props.isDisableCoachmark === false
      ? `2px solid ${Color.gray[600]}`
      : `2px solid ${Color.gray[600]}`};
  // 버튼이 비활성화 상태가 아닐 때 hover 및 active 스타일 적용
  &:hover {
    background-color: ${(props) => (!props.$isDisabled ? Color.gray[800] : Color.gray[500])};
    #circle1,
    #circle2,
    #circle3,
    #circle4,
    #circle5,
    #circle6 {
      fill: ${Color.gray[800]};
    }
  }

  &:active {
    background-color: ${(props) => (!props.$isDisabled ? Color.gray[800] : Color.gray[500])};
    #circle1,
    #circle2,
    #circle3,
    #circle4,
    #circle5,
    #circle6 {
      fill: ${Color.gray[800]};
    }
  }
`
export const LeftBtn = styled.div`
  position: relative;
  right: 47%;

  @media ${Devices.laptop} {
    right: 47%;
  }
`

export const RightBtn = styled.div`
  transform: rotate(180deg);
  top: -8vh;
  position: relative;
  right: -47%;

  @media ${Devices.laptop} {
    right: -47%;
    top: -6vh;
  }

  @media ${Devices.tablet} {
    top: -5.1vh;
  }

  @media ${Devices.mobileL} {
    top: -52px;
    right: -46%;
  }
`

export const BtnText = styled.div`
  text-align: center;
  position: relative;
  top: -50%;
  font-weight: 600;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${Devices.tablet} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
