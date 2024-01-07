import BtnArea from '@/components/molecule/layout/BtnArea'
import { useRouter } from "@/hooks/useRouter"
import MainItemLayout from '../layout/MainItemLayout'
import MainTitle from '@/components/molecule/title/MainTitle'
function Landing() {
  const { routeTo } = useRouter()
  return (
    <>
      <MainTitle title="" desc=''/>
      <MainItemLayout>Landing</MainItemLayout>
      <BtnArea title='시작하기' isDisabled={false} onClick={() => routeTo('/main')}/>
    </>
  )
}

export default Landing