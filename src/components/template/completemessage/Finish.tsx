import { useEffect, useRef, useState } from 'react'
import MainTitle from '@/components/molecule/title/MainTitle'
import lottie from 'lottie-web'
import * as Styled from './finish.styled'
import BtnArea from '@/components/molecule/layout/BtnArea'
import { useRouter } from '@/hooks/useRouter'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user'
import MainModal from '@/components/organism/modal/MainModal'
import { useParams } from 'react-router-dom'
import { getUserMessages } from '@/api'

function Finish() {
  const likecontainer = useRef(null)
  const [user] = useAtom(userAtom)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFirstClick, setIsFirstClick] = useState(true) // 처음 클릭 여부를 관리합니다.
  const [isPockets, setIsPockets] = useState(false)
  const { id } = useParams()

  console.log('user', user.uid)
  useEffect(() => {
    if (likecontainer.current) {
      lottie.loadAnimation({
        container: likecontainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'https://lottie.host/1da8d8d2-8749-43c9-9187-8f43a751ce5f/grFC8zD8V6.json',
      })
    }
  }, [])
  useEffect(() => {
    fetchPocket()
  }, [id])

  const { routeTo } = useRouter()

  const openModal = () => {
    setIsModalOpen(true)
  }
  const fetchPocket = async () => {
    const data = await getUserMessages('Pocket', user.uid)
    setIsPockets(data.length > 0)
  }

  const handleBtnClick = () => {
    if (isFirstClick && !isPockets) {
      openModal()
      console.log('1')
      setIsFirstClick(false) // 처음 클릭 이후에는 다음 클릭에서 모달을 열지 않음
    } else {
      // 다음 클릭에서는 페이지 이동 수행
      console.log('2')
      routeTo(`/main/${user.uid}`)
    }
  }

  return (
    <>
      <MainModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="잠깐"
        desc1="나의 복주머니를 생성하면"
        desc2="덕담을 받아볼 수 있어요."
        route="/main/:id'"
        agree1="네, 만들래요!"
        agree2="관심없어요"
      />
      <MainTitle title="덕담 발송 완료!" desc="따뜻한 덕담이 발송되었어요" />
      <Styled.SWrapper ref={likecontainer}></Styled.SWrapper>
      <BtnArea
        onClick={handleBtnClick} // 클릭 이벤트를 handleBtnClick 함수로 변경
        title={isFirstClick ? '메인으로' : '다시 메인으로'} // 클릭 상태에 따라 버튼 텍스트 변경
        isDisabled={false}
      />
    </>
  )
}

export default Finish
