import * as Styled from './maininput.styled'
import { ChangeEvent } from 'react'

interface InputProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function Input({ value, onChange }: InputProps) {
  return (
    <div>
      <Styled.SWrapper
        type="text"
        placeholder="이름을 입력하세요."
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
