import PocketIcon from '@/components/atom/icon/pocket/PocketIcon'
// import PocketIconImg from '@/img/PocketIcon';
import PocketIconImg from "@/assets/복주머니.png"
import BtnArea from '@/components/molecule/layout/BtnArea';
import { useRouter } from "@/hooks/useRouter"
import MainItemLayout from "@/components/template/layout/MainItemLayout"
import MainTitle from '@/components/molecule/title/MainTitle'

function SendMessage() {
    const { routeTo } = useRouter()

  return (
    <>
    <MainTitle title="나만의 복주머니를 만들어보세요" desc="복주머니를 만들어 따뜻한 덕담을 주고 받아볼까요?"/>
      <MainItemLayout>
        <PocketIcon icon={PocketIconImg } />
        </MainItemLayout>
      <BtnArea title='덕담 보내기' isDisabled={false} onClick={()=>{routeTo('/selectpocket')}} />
    </>
  )
}

export default SendMessage