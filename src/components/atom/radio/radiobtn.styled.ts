import styled from 'styled-components'
import Color from '@/style/Color'

interface RadioProps {
  checked: boolean;
}

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto;
`
export const Radio = styled.input<RadioProps>`
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.05s ease-in-out;
  cursor: pointer;
  position: relative;
  border: ${props => props.checked ? `1.5px solid ${Color.pointColor}` : `2px solid ${Color.gray[400]}`};
  background-color: ${props => props.checked ? Color.pointColor : 'transparent'};

  :focus {
    outline: 3px solid ${Color.yellow[200]};
  }
`;

