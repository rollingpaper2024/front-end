import Envelope from '@/components/atom/messageview/Envelope'
import Paper from '@/components/atom/messageview/Paper'
import * as Styled from './messageview.styled'

interface MessageCardProps {
  name: string
  content: string
  color: string
}

function MessageView({ name, content, color }: MessageCardProps) {
  return (
    <>
      <Styled.SWrapper>
        <Styled.SWriter>{name}</Styled.SWriter>
        <Styled.SContents>{content}</Styled.SContents>
        <Paper color={color} />
      </Styled.SWrapper>
      <Envelope color={color} />
    </>
  )
}

export default MessageView
