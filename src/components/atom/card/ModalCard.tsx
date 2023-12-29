import ModalBtn from '@/components/atom/buttons/ModalBtn'
import * as Styled from './modalcard.styled'
import ModalBorder from '@/img/ModalBorder'

function ModalCard() {
  return (
    <Styled.SModal>
      <Styled.ModalLeftUp>
        <ModalBorder />
      </Styled.ModalLeftUp>
      <Styled.ModalRightUp>
        <ModalBorder />
      </Styled.ModalRightUp>
      <Styled.ModalTitle>잠깐!</Styled.ModalTitle>
      <Styled.ModalContent>
        복주머니 색은 한번만 정할 수 있어요
        <br />
        이대로 결정할까요?
      </Styled.ModalContent>
      <Styled.ModalBtnWrapper>
        <ModalBtn title="네" isDisabled={true} />
        <ModalBtn title="아니오" isDisabled={false} />
      </Styled.ModalBtnWrapper>
      <Styled.ModalLeftDown>
        <ModalBorder />
      </Styled.ModalLeftDown>
      <Styled.ModalRightDown>
        <ModalBorder />
      </Styled.ModalRightDown>
    </Styled.SModal>
  )
}

export default ModalCard
