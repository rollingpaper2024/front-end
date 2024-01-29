import React, { useEffect, useState } from 'react'
import PocketIcon from '@/components/atom/icon/pocket/PocketIcon'
import PocketIconImg from '@/assets/복주머니.webp'
import ActivePocketImg from '@/assets/pocket_active.webp'
import BtnArea from '@/components/molecule/layout/BtnArea'
import { useRouter } from '@/hooks/useRouter'
import MainItemLayout from '@/components/template/layout/MainItemLayout'
import MainTitle from '@/components/molecule/title/MainTitle'
import { getUserMessages } from '@/api'
import { useParams } from 'react-router-dom'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user.ts'

function SendMessage() {
  const { routeTo } = useRouter()
  const { id } = useParams()
  const [messageCount, setMessageCount] = useState(0)
  const [isvalidUser, setIsValidUser] = useState(false)
  const [isPocket, setIsPocket] = useState(false)
  const [user] = useAtom(userAtom)
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)
  const [btnMessage, setBtnMessage] = useState('')
  const [parameter, setParameter] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  useEffect(() => {
    generateBtnText()
  }, [id, isPocket]) // isPocket 상태 변경에 따라 useEffect 재실행

  useEffect(() => {
    if (id && id !== 'no-user') {
      setIsValidUser(true)
      fetchMessages(id)
    }
  }, [id])

  async function fetchMessages(userId) {
    const messageData = await getUserMessages(userId)
    const pocketData = await getUserMessages('Pocket', userId)
    if (messageData) {
      setMessageCount(messageData.length)
    }
    if (pocketData && pocketData.length > 0) {
      setIsPocket(true)
    }
  }

  const generateBtnText = () => {
    if (user.uid !== 'no-user') {
      if (user.uid !== id) {
        setBtnMessage('덕담 쓰기')
        setParameter(`/writemessage/${id}`)
      } else {
        if (!isPocket) {
          setTitle('나만의 복주머니를 만들어보세요.')
          setDesc('복주머니를 만들어 따뜻한 덕담을 주고 받아볼까요?')
          setBtnMessage('시작하기')
          setParameter('/selectpocket')
        } else {
          if (messageCount === 0) {
            setTitle('도착한 덕담이 없습니다.')
            setDesc('친구에게 공유하여 덕담을 확인해 보세요.')
            setBtnMessage('덕담 읽기')
            setParameter(`/messagelist/${id}`)
            setIsBtnDisabled(true)
          } else {
            setBtnMessage('덕담 읽기')
            setParameter(`/messagelist/${id}`)
            setIsBtnDisabled(false)
          }
        }
      }
    } else {
      setTitle('나만의 복주머니를 만들어보세요.')
      setDesc('복주머니를 만들어 따뜻한 덕담을 주고 받아볼까요?')
      setBtnMessage('시작하기')
      setParameter('/selectpocket')
    }
  }

  const generateParameter = () => {
    routeTo(parameter)
  }

  return (
    <>
      <MainTitle title={title} desc={desc} />
      <MainItemLayout>
        <PocketIcon icon={isvalidUser && messageCount > 0 ? ActivePocketImg : PocketIconImg} />
      </MainItemLayout>
      <BtnArea
        title={btnMessage}
        isDisabled={isBtnDisabled}
        onClick={generateParameter} // 함수 호출이 아닌 참조만 전달
      />
    </>
  )
}

export default SendMessage
