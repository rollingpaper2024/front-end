import styled from 'styled-components'
import Color from '@/style/Color'

interface coachmarkProps {
  isDisableCoachmark: boolean
}

export const SIconDiv = styled.div<coachmarkProps>`
  width: ${(props) => (props.isDisableCoachmark === false ? '36px' : '24px')};
  height: ${(props) => (props.isDisableCoachmark === false ? '36px' : '24px')};
  border-radius: ${(props) => (props.isDisableCoachmark === false ? '50px' : '')};
  svg {
    width: 24px;
    height: 24px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  background-color: ${(props) => (props.isDisableCoachmark === false ? 'white' : 'none')};
  border: ${(props) =>
    props.isDisableCoachmark === false ? `2px solid ${Color.pointColor}` : 'none'};
  z-index: ${(props) => (props.isDisableCoachmark === false ? 1000001 : 1)};
`
