import MainBtn from '@/components/atom/buttons/MainBtn'
import ModalCard from '@/components/atom/card/ModalCard'

function components() {
  return (
    <>
      <div>main</div>
      <MainBtn title="로그인" isDisabled={false} />
      <ModalCard />
    </>
  )
}

export default components
