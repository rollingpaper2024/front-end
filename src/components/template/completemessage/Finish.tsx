import { useEffect, useRef } from 'react'
import MainTitle from '@/components/molecule/title/MainTitle'
import lottie from 'lottie-web'
import * as Styled from './finish.styled'
import BtnArea from '@/components/molecule/layout/BtnArea'
import { useRouter } from '@/hooks/useRouter'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user'

function Finish() {
  const likecontainer = useRef(null)
  const [user] = useAtom(userAtom)

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

  const { routeTo } = useRouter()

  return (
    <>
      <MainTitle title="덕담 발송 완료!" desc="따뜻한 덕담이 발송되었어요" />
      <Styled.SWrapper ref={likecontainer}></Styled.SWrapper>
      {
        <BtnArea
          onClick={() => {
            routeTo(`/main/${user.uid}`)
          }}
          title="메인으로"
          isDisabled={false}
        />
      }
    </>
  )
}

export default Finish
