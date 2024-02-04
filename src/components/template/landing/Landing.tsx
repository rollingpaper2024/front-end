import BtnArea from '@/components/molecule/layout/BtnArea'
import { useRouter } from '@/hooks/useRouter'
import MainItemLayout from '@/components/template/layout/MainItemLayout'
import SubItemLayout from '../layout/SubItemLayout'
import MainTitle from '@/components/molecule/title/MainTitle'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user'
function Landing() {
  const { routeTo } = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useAtom(userAtom)

  return (
    <>
      <MainTitle title="" desc="" />
      <MainItemLayout text="설을 맞이하여 소중한 사람들에게 내 마음을 전해봐요!">
        너의 덕담이 보여
      </MainItemLayout>
      <BtnArea title="시작하기" isDisabled={false} onClick={() => routeTo(`/main/${user.uid}`)} />
    </>
  )
}

export default Landing
