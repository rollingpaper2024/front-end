import type { RadioBtnProps } from './radioBtnTypes'
import * as Styled from './radiobtn.styled'

const RadioBtn = ({ id, checked, onChange }: RadioBtnProps) => {
  return (
    <Styled.RadioWrapper>
      <Styled.Radio type="radio" id={id} checked={checked} onChange={onChange} />
    </Styled.RadioWrapper>
  )
}

export default RadioBtn
