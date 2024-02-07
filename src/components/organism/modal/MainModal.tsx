import BackGround from '@/components/atom/background/BackGround'
import ModalCard from '@/components/atom/card/ModalCard'

interface ModalType {
  isModalOpen?: boolean
  setIsModalOpen?: (value: boolean | ((prevVal: boolean) => boolean)) => void
  PostPocket?: () => Promise<void>
  title: string
  desc1: string
  desc2: string
}

function MainModal({
  isModalOpen,
  setIsModalOpen,
  PostPocket = () => Promise.resolve(),
  title,
  desc1,
  desc2,
}: ModalType) {
  const handlePostPocket = () => {
    return PostPocket ? PostPocket() : Promise.resolve()
  }
  if (!isModalOpen) return null

  return (
    <BackGround>
      <ModalCard
        title={title}
        desc1={desc1}
        desc2={desc2}
        setIsModalOpen={setIsModalOpen}
        PostPocket={handlePostPocket}
      />
    </BackGround>
  )
}

export default MainModal
