import * as Styled from './modalbtn.styled'

interface ModalBtnProps {
  title: string
  isDisabled: boolean
  onClick?: () => void
}

function ModalBtn({ title, isDisabled,onClick }: ModalBtnProps) {
  return (
    <>
      <Styled.SBtn $isDisabled={isDisabled} onClick={onClick}>{title}</Styled.SBtn>
    </>
  )
}

export default ModalBtn
