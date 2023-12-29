import MainBtn from '@/components/atom/buttons/MainBtn'
import ModalCard from '@/components/atom/card/ModalCard'
import Alert from '@/components/atom/alert/Alert'

function components() {
  return (
    <>
      <div>main</div>
      <MainBtn title="로그인" isDisabled={false} />
      <ModalCard />
      <Alert number={100} />
    </>
  )
}

export default components
