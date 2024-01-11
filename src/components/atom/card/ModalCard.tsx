import ModalBtn from '../buttons/ModalBtn'
import * as Styled from './modalcard.styled'
import ModalBorder from '@/img/ModalBorder'
import { useRouter } from '@/hooks/useRouter'

interface ModalType {
  setIsModalOpen?: (value: boolean | ((prevVal: boolean) => boolean)) => void;
  PostPocket?: () => Promise<void>;
}
function ModalCard({setIsModalOpen,PostPocket}:ModalType) {
  const router =useRouter()

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
        <ModalBtn title="네" isDisabled={true} onClick={()=>{  if (PostPocket) {
            PostPocket();
            router.routeTo('/main')
          }
          if (setIsModalOpen) {
            setIsModalOpen(true);
          }}}/>
        <ModalBtn title="아니오" isDisabled={false} onClick={()=>{if (setIsModalOpen) {
            setIsModalOpen(false);
          }}}/>
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
