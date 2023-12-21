import styled from "styled-components";


export const SBtn = styled.button<{$isDisabled: boolean}>`
  background-color: ${props => props.$isDisabled ? "#CCCCCC" : "#2F2F31"};

  // 버튼이 비활성화 상태가 아닐 때 hover 및 active 스타일 적용
  &:hover {
    background-color: ${props => !props.$isDisabled ? "호버시 색상 코드" : "#CCCCCC"};
  }

  &:active {
    background-color: ${props => !props.$isDisabled ? "클릭시 색상 코드" : "#CCCCCC"};
  }
`;