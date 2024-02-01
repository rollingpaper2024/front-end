import BackGround from '@/components/atom/background/BackGround'
import ModalCard2 from '@/components/atom/card/ModalCard2'

interface ModalType {
  isModalOpen?: boolean
  setIsModalOpen?: (value: boolean | ((prevVal: boolean) => boolean)) => void
  PostPocket?: () => Promise<void>
}

function MainModal2({
  isModalOpen,
  setIsModalOpen,
  PostPocket = () => Promise.resolve(),
}: ModalType) {
  const handlePostPocket = () => {
    return PostPocket ? PostPocket() : Promise.resolve()
  }
  if (!isModalOpen) return null

  return (
    <BackGround>
      <ModalCard2 setIsModalOpen={setIsModalOpen} PostPocket={handlePostPocket} />
    </BackGround>
  )
}

export default MainModal2
