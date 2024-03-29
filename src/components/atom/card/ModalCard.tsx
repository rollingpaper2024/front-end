import ModalBtn from '../buttons/ModalBtn'
import * as Styled from './modalcard.styled'
import ModalBorder from '@/img/ModalBorder'
import { useRouter } from '@/hooks/useRouter'

interface ModalType {
  setIsModalOpen?: (value: boolean | ((prevVal: boolean) => boolean)) => void
  PostPocket?: () => Promise<void>
  title: string
  desc1: string
  desc2: string
  route: string
  agree1: string
  agree2: string
}
function ModalCard({
  setIsModalOpen,
  PostPocket,
  title,
  desc1,
  desc2,
  route,
  agree1,
  agree2,
}: ModalType) {
  const { routeTo } = useRouter()

  return (
    <Styled.SModal>
      <Styled.ModalLeftUp>
        <ModalBorder />
      </Styled.ModalLeftUp>
      <Styled.ModalRightUp>
        <ModalBorder />
      </Styled.ModalRightUp>
      <Styled.ModalTitle>{title}</Styled.ModalTitle>
      <Styled.ModalContent>
        {desc1}
        <br />
        {desc2}
      </Styled.ModalContent>
      <Styled.ModalBtnWrapper>
        <ModalBtn
          agree={agree1}
          isDisabled={true}
          onClick={() => {
            if (PostPocket) {
              PostPocket()
              routeTo(route)
            }
            if (setIsModalOpen) {
              setIsModalOpen(true)
            }
          }}
        />
        <ModalBtn
          agree={agree2}
          isDisabled={false}
          onClick={() => {
            if (setIsModalOpen) {
              setIsModalOpen(false)
            }
          }}
        />
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
