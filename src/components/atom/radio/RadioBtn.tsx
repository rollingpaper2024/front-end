import type { RadioBtnProps } from './radioBtnTypes'
import * as Styled from './radiobtn.styled'

const RadioBtn = ({ id, checked }: RadioBtnProps) => {

  return (
    <Styled.RadioWrapper>
      <Styled.Radio type="radio" id={id} checked={checked}  />
    </Styled.RadioWrapper>
  )
}

export default RadioBtn
