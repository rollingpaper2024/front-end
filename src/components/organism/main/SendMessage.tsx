import React from 'react'
import PocketIcon from '@/components/atom/icon/pocket/PocketIcon'
import MainBtn from '@/components/atom/buttons/MainBtn'
// import PocketIconImg from '@/img/PocketIcon';
import PocketIconImg from "@/assets/복주머니.png"
import * as Styled from "./sendmessage.styled"
import BtnArea from '@/components/molecule/button/BtnArea';
import {useRouter} from "@/hooks/useRouter"

function SendMessage() {
    const { routeTo } = useRouter()

  return (
    <>
        <Styled.STitleLayout>
        {/* 추후 타이틀 컴포넌트 만들면 추가예정 */}
        </Styled.STitleLayout>
        <Styled.SPocketLayout>
        <PocketIcon icon={PocketIconImg } />
        </Styled.SPocketLayout>
      <BtnArea title='덕담 보내기' isDisabled={false} onClick={()=>{routeTo('/selectpocket')}} />
    </>
  )
}

export default SendMessage