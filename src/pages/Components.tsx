import MainBtn from '@/components/atom/buttons/MainBtn'
import ModalCard from '@/components/atom/card/ModalCard'
import Alert from '@/components/atom/alert/Alert'
import ListCard from '@/components/atom/card/ListCard'
import color from '@/style/color'

function components() {
  return (
    <>
      <div>main</div>
      <MainBtn title="로그인" isDisabled={false} />
      <ModalCard />
      <Alert number={100} />
      <ListCard
        color={color.cashColor[600]}
        name={'양나무늘보'}
        date={'어제'}
        message={'미리 보기 글자 가로는 286으로 고정하세...'}
      />
    </>
  )
}

export default components
