import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMessage } from '@/api'
import MessageView from '@/components/template/messageview/index'

function ViewMessage() {
  const { messageId } = useParams<{ messageId: string }>()
  const [message, setMessage] = useState<Message | null>(null)

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const messageData = await getMessage(messageId)
        setMessage(messageData)
        console.log(messageData)
      } catch (error) {
        console.error('Error fetching message:', error)
      }
    }

    fetchMessage()
  }, [messageId])

  if (!message) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <MessageView name={message.writer} content={message.contents} color={message.color} />
    </div>
  )
}

export default ViewMessage
