import styled from 'styled-components'
import Color from '@/style/Color'

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto;
`

export const Radio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${Color.gray[400]};
  border-radius: 50%;
  transition: all 0.05s ease-in-out;
  cursor: pointer;
  position: relative;

  :checked {
    border: 1.5px solid ${Color.pointColor};
    ::after {
      background-color: ${Color.pointColor};
    }
  }

  :focus {
    outline: 3px solid ${Color.yellow[200]};
  }
`
