import color from '../../../style/color'
import styled from 'styled-components'
import font from '@/style/font'

export const SBtn = styled.button<{ $isDisabled: boolean }>`
  background-color: ${(props) => (props.$isDisabled ? color.yellow[200] : color.gray[600])};
  height: 56px;
  width: 80%;
  color: ${(props) => (props.$isDisabled ? color.gray[800] : color.white)};
  background-size: cover;
  font-size: ${font.Small};
  border: 1px solid ${(props) => (props.$isDisabled ? color.yellow[200] : color.yellow[200])};

  // 버튼이 비활성화 상태가 아닐 때 hover 및 active 스타일 적용
  &:hover {
    background-color: ${(props) => (!props.$isDisabled ? color.gray[800] : color.yellow[400])};
  }

  &:active {
    background-color: ${(props) => (!props.$isDisabled ? color.gray[800] : color.yellow[400])};
  }
`
