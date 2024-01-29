import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMessage } from '@/api'

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
      <h1>{message.writer}</h1>
      <p>{message.contents}</p>
    </div>
  )
}

export default ViewMessage
