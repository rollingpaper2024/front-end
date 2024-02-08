import { MouseEventHandler } from 'react'
import * as Styled from './listcard.styled'
import ListIcnLeft from '@/img/ListICNLeft'

interface ListCardProps {
  color: string
  name: string
  date: string
  message: string
  messageId: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

function ListCard({ color, name, date, message, onClick }: ListCardProps) {
  const isSmallScreen = window.innerWidth <= 320
  const formatDate = (dateString: string) => {
    const currentDate = new Date()
    const messageDate = new Date(dateString)

    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const currentDay = currentDate.getDate()

    const messageYear = messageDate.getFullYear()
    const messageMonth = messageDate.getMonth()
    const messageDay = messageDate.getDate()

    if (currentYear === messageYear && currentMonth === messageMonth && currentDay === messageDay) {
      return '오늘'
    } else {
      const yesterday = new Date(currentDate)
      yesterday.setDate(yesterday.getDate() - 1)

      if (
        yesterday.getFullYear() === messageYear &&
        yesterday.getMonth() === messageMonth &&
        yesterday.getDate() === messageDay
      ) {
        return '어제'
      } else {
        // 오늘과 어제가 아닌 경우에는 입력된 날짜를 반환합니다.
        return dateString
      }
    }
  }

  const formattedDate = isSmallScreen ? formatDate(date.slice(0, 10)) : formatDate(date)

  return (
    <Styled.SList onClick={onClick}>
      <Styled.ListWrapper color={color}>
        <Styled.ListTitle>{name}</Styled.ListTitle>
        <Styled.ListDate>{formattedDate}</Styled.ListDate>
        <Styled.ListText>{message}</Styled.ListText>
      </Styled.ListWrapper>
      <Styled.ListIcnLeft>
        <ListIcnLeft color={color} />
      </Styled.ListIcnLeft>
      <Styled.ListIcnRight>
        <ListIcnLeft color={color} />
      </Styled.ListIcnRight>
    </Styled.SList>
  )
}

export default ListCard
