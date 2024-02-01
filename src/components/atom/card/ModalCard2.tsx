import ModalBtn from '../buttons/ModalBtn'
import * as Styled from './modalcard.styled'
import ModalBorder from '@/img/ModalBorder'
import { useRouter } from '@/hooks/useRouter'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user'

interface ModalType {
  setIsModalOpen?: (value: boolean | ((prevVal: boolean) => boolean)) => void
  PostPocket?: () => Promise<void>
}
function ModalCard2({ setIsModalOpen, PostPocket }: ModalType) {
  const { routeTo } = useRouter()
  const [user] = useAtom(userAtom)

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
        나만의 복주머니를 생성하면
        <br />
        덕담을 받아 볼 수 있어요.
      </Styled.ModalContent>
      <Styled.ModalBtnWrapper>
        <ModalBtn
          title="네, 만들래요!"
          isDisabled={true}
          onClick={() => {
            if (PostPocket) {
              PostPocket()
              routeTo(`/main/${user.uid}`)
            }
            if (setIsModalOpen) {
              setIsModalOpen(true)
            }
          }}
        />
        <ModalBtn
          title="관심없어요"
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

export default ModalCard2
