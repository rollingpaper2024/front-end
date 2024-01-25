import * as Styled from './textarea.styled'

interface TextAreaProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function TextArea({ value, onChange }: TextAreaProps) {
  return (
    <Styled.SWrapper
      as="textarea"
      placeholder="내용을 입력하세요."
      value={value}
      onChange={onChange}
    />
  )
}

export default TextArea
