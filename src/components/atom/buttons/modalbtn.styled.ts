import Color from '@/style/Color'
import styled from 'styled-components'
import * as Font from '@/style/Font'

export const SBtn = styled.button<{ $isDisabled: boolean }>`
  background-color: ${(props) => (props.$isDisabled ? Color.yellow[200] : Color.gray[600])};
  height: 56px;
  width: 80%;
  color: ${(props) => (props.$isDisabled ? Color.gray[800] : Color.white)};
  background-size: cover;
  font-size: ${Font.Fontsize.Small};
  border: 1px solid ${(props) => (props.$isDisabled ? Color.yellow[200] : Color.yellow[200])};

  // 버튼이 비활성화 상태가 아닐 때 hover 및 active 스타일 적용
  &:hover {
    background-color: ${(props) => (!props.$isDisabled ? Color.gray[800] : Color.yellow[400])};
  }

  &:active {
    background-color: ${(props) => (!props.$isDisabled ? Color.gray[800] : Color.yellow[400])};
  }
`
