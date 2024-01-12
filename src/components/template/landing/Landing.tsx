import BtnArea from '@/components/molecule/layout/BtnArea'
import { useRouter } from "@/hooks/useRouter"
import MainItemLayout from '../layout/MainItemLayout'
import MainTitle from '@/components/molecule/title/MainTitle'
import { useAtom } from 'jotai';
import { userAtom } from '@/store/user'
function Landing() {
  const { routeTo } = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useAtom(userAtom);
  console.log("user",user)
  return (
    <>
      <MainTitle title="" desc=''/>
      <MainItemLayout>Landing</MainItemLayout>
      <BtnArea title='시작하기' isDisabled={false} onClick={() => routeTo(`/main/${user.uid}`)}/>
    </>
  )
}

export default Landing