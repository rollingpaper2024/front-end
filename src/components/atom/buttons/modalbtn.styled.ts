import color from '../../../style/color'
import styled from 'styled-components'
import font from '../../../style/font'

export const SBtn = styled.button<{ $isDisabled: boolean }>`
  background-color: ${(props) => (props.$isDisabled ? color.yellow[200] : color.gray[200])};
  height: 56px;
  width: 80%;
  color: ${color.gray[800]}};
  background-size: cover;
  font-size: ${font.Middle};

  // 버튼이 비활성화 상태가 아닐 때 hover 및 active 스타일 적용
  &:hover {
    background-color: ${(props) => (!props.$isDisabled ? color.yellow[300] : color.gray[200])};
  }

  &:active {
    background-color: ${(props) => (!props.$isDisabled ? color.gray[600] : color.gray[200])};
  }
`
