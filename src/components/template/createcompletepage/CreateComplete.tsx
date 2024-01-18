import { useEffect } from 'react'
import MainItemLayout from '../layout/MainItemLayout'
import MainTitle from '@/components/molecule/title/MainTitle'
import PocketIcon from '@/components/atom/icon/pocket/PocketIcon'
import Pocket from '@/assets/복주머니.webp'
import BtnArea from '@/components/molecule/layout/BtnArea'
import { useRouter } from "@/hooks/useRouter"
import { useAtom } from 'jotai';
import { userAtom } from '@/store/user'
import { getUserMessages } from '@/api'


function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { routeTo } = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks

  const [user] = useAtom(userAtom);
  
  useEffect(() => {
    fetchPocket()
  }, [user])
  
  async function fetchPocket() {
    const pocketData = await getUserMessages('Pocket', user.uid)
    if (pocketData && pocketData.length > 0) {
      routeTo(`/main/${user.uid}`)
    }
  }

  return (
    <>
        <MainTitle
        title="나만의 복주머니 생성 완료"
        desc="친구들에게 링크를 공유하고 덕담을 받아봐요"
      />
        <MainItemLayout><PocketIcon icon={Pocket}/></MainItemLayout>
        <BtnArea
        onClick={() => {
            routeTo(`/main/${user.uid}`)
        }}
        title="메인으로"
        isDisabled={false}
      />

    </>

  )
}

export default index