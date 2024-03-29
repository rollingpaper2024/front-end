import React, { useRef, useEffect, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import ListCard from '@/components/atom/card/ListCard'
import * as Styled from '@/components/organism/list/Listlayer.styled'
import { useParams } from 'react-router-dom'
import { useAtom } from 'jotai'
import { v4 as uuidv4 } from 'uuid'
import { userAtom } from '@/store/user'
import { getUserMessages } from '@/api'
import { useRouter } from '@/hooks/useRouter'
import List from '@/components/template/list/List'
import { toast } from 'react-toastify'

function MessageList() {
  const [user] = useAtom(userAtom)
  const containerRef = useRef<HTMLDivElement>(null)
  const { id } = useParams()
  const [messageCount, setMessageCount] = useState(0)
  const { routeTo } = useRouter()

  useEffect(() => {
    // 전체 메시지 개수를 가져오는 함수
    const fetchMessageCount = async () => {
      const totalMessageData = await getUserMessages('Message', id)
      if (totalMessageData) {
        setMessageCount(totalMessageData.length)
      }
    }

    if (user) {
      fetchMessageCount()
    }
  }, [user, id])

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['messages', id],
    queryFn: ({ pageParam = null }) => getUserMessages('Message', id, pageParam, 6),
    getNextPageParam: (lastPage) => lastPage.lastVisible || undefined,
  })

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = containerRef.current
      if (scrollTop + clientHeight >= scrollHeight - 1 && hasNextPage && !isFetchingNextPage) {
        fetchNextPage()
      }
    }
  }

  return (
    <>
      <List messageCount={messageCount} />
      <Styled.SLayout ref={containerRef} onScroll={handleScroll}>
        {data?.pages.map((page: any, i: number) => (
          <React.Fragment key={i}>
            {page.map((message: any) => (
              <ListCard
                key={uuidv4()}
                color={message.color}
                name={message.writer}
                date={message.date}
                message={message.contents}
                messageId={message.id}
                onClick={() => {
                  if (user?.uid === message.uid) {
                    routeTo(`/messagelist/${id}/${message.id}`)
                  } else {
                    //다른 사용자
                    console.error('Permission denied: You cannot access this message.')
                    toast.error('해당 덕담에 대한 읽기 권한이 없습니다.')
                  }
                }}
              />
            ))}
          </React.Fragment>
        ))}
        {isFetchingNextPage && <p>Loading more...</p>}
        {!hasNextPage && <p>모든 덕담리스트를 확인했습니다.</p>}
      </Styled.SLayout>
    </>
  )
}

export default MessageList
