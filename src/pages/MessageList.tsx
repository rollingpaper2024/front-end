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
  const [listindex, setListIndex] = useState(6)

  useEffect(() => {
    if (user) {
      fetchMessages()
    }
  }, [user])

  //무한스크롤
  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } = containerRef.current || {}

      if (
        scrollTop + clientHeight >= scrollHeight - 1 &&
        !loading &&
        messages.length < messageCount
      ) {
        setListIndex((listIndex) => listIndex + 6)
      }
    }

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [containerRef, loading, messages, messageCount])

  useEffect(() => {
    fetchMessages()
  }, [listindex])

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
        {messages.slice(0, listindex).map((message) => (
          <ListCard
            key={uuid()}
            color="#FFC44F"
            name={message.writer}
            date={message.createdAt}
            message={message.contents}
          />
        ))}
        {loading && <p>Loading...</p>}
        {!loading && messages.length === messageCount && <p>모든 덕담리스트를 확인했습니다.</p>}
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
