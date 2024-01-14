import * as Styled from './List.styled'
import MainTitle from '@/components/molecule/title/MainTitle'

function List({ messageCount }: { messageCount: number }) {
  return (
    <Styled.SLayout>
      <MainTitle
        title={`${messageCount}개의 덕담 도착!`}
        desc="마음을 담아 보내진 덕담들을 읽어보세요"
      />
    </Styled.SLayout>
  )
}

export default List
