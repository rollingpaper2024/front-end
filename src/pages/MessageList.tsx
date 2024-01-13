/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useRef } from 'react'
import { getUserMessages } from '@/api'
import List from '@/components/template/list/List'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user'
import BtnArea from '@/components/molecule/layout/BtnArea'
import { useRouter } from '@/hooks/useRouter'
import ListCard from '@/components/atom/card/ListCard'
import uuid from 'react-uuid'
import * as Styled from '@/components/organism/list/Listlayer.styled'

function MessageList() {
  const [user] = useAtom(userAtom)
  const [messages, setMessages] = useState<any[]>([])
  const [messageCount, setMessageCount] = useState(0)
  const { routeTo } = useRouter()
  const [loading, setLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (user) {
      fetchMessages()
    }
  }, [user])

  //무한스크롤
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchMessages()
        }
      },
      { threshold: 0.5 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [containerRef, loading])

  async function fetchMessages() {
    try {
      setLoading(true)
      const data = await getUserMessages('Message', user.uid)
      if (data) {
        setMessages((prevMessages) => [...prevMessages, ...data])
        setMessageCount(data.length)
        //console.log(data)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <List messageCount={messageCount} />
      <Styled.SLayout ref={containerRef}>
        {messages.map((message) => (
          <ListCard
            key={uuid()}
            color="#FFC44F"
            name={message.writer}
            date={message.createdAt}
            message={message.contents}
          />
        ))}
        {loading && <p>Loading...</p>}
      </Styled.SLayout>
      {/*<BtnArea
        onClick={() => {
          routeTo(`/writemessage/${user.uid}`)
        }}
        title="덕담 쓰기"
        isDisabled={false}
      />*/}
    </>
  )
}

export default MessageList
