import Color from '@/style/Color'
import styled from 'styled-components'
import font from '@/style/font'

export const SBtn = styled.button<{ $isDisabled: boolean }>`
  background-color: ${(props) => (props.$isDisabled ? Color.gray[500] : Color.gray[600])};
  height: 56px;
  width: 80%;
  color: ${Color.yellow[300]};
  font-size: ${font.Small};
  border: 2px solid ${Color.gray[600]};
  min-width: 334px;
  overflow: hidden;

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
  top: -2px;
`

export const RightBtn = styled.div`
  transform: rotate(180deg);
  top: -76px;
  position: relative;
`

export const BtnText = styled.div`
  text-align: center;
  position: relative;
  top: -55%;
  font-weight: 600;
  left: 50%;
  transform: translate(-50%, -50%);
`
