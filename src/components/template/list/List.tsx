import { useState } from "react"
import * as Styled from "./list.styled"
import MainTitle from '@/components/molecule/title/MainTitle'

function List() {
  const [messageCount, setMessageCount] = useState(0)
  
  // 파이어 베이스에서 유저의 덕담 개수를 가져와서 setMessageCount 한다
  return (
    <Styled.SLayout>
         <MainTitle title={`${messageCount}개의 덕담 도착!`} desc='마음을 담아 보내진 덕담들을 읽어보세요'/>
    </Styled.SLayout>
  )
}

export default List