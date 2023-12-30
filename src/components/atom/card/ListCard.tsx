import * as Styled from './listcard.styled'
import ListCardIcn from '@/img/ListCardIcn'

interface ListCardProps {
  color: string
  name: string
  date: string
  message: string
}

function ModalCard({ color, name, date, message }: ListCardProps) {
  return (
    <Styled.SList>
      <Styled.ListIcnWrapper>
        <ListCardIcn color={color} />
      </Styled.ListIcnWrapper>
      <Styled.ListWrapper>
        <Styled.ListTitle>{name}</Styled.ListTitle>
        <Styled.ListDate>{date}</Styled.ListDate>
        <Styled.ListText>{message}</Styled.ListText>
      </Styled.ListWrapper>
    </Styled.SList>
  )
}

export default ModalCard
