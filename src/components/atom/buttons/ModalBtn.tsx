import * as Styled from './modalbtn.styled'

interface ModalBtnProps {
  agree: string
  isDisabled: boolean
  onClick?: () => void
}

function ModalBtn({ agree, isDisabled, onClick }: ModalBtnProps) {
  return (
    <>
      <Styled.SBtn $isDisabled={isDisabled} onClick={onClick}>
        {agree}
      </Styled.SBtn>
    </>
  )
}

export default ModalBtn
