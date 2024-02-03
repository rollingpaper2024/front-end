import React, { useState, useEffect } from 'react'
import * as Styled from './selecticon.styled'
import HeaderIcon from '@/components/atom/icon/header/HeaderIcon'
import WriteIcon from '@/assets/write.webp'
import { useRouter } from '@/hooks/useRouter'
import { useParams } from 'react-router-dom'
import Tooltip from '@/img/Tooltip'
import TooltipClose from '@/img/TooltipClose'
import { shareKaKaoLink } from '../../../utils/shareKaKaoLink'
import Alert from '@/components/atom/alert/Alert'
import { getUserMessages } from '@/api'
import ShareIcon from '@/img/ShareIcon'
import DefaultAlarm from '@/img/DefaultAlarm'
import ActiveAlarm from '@/img/ActiveAlarm'
import { useAtom } from 'jotai'
import { userAtom } from '@/store/user.ts'
import BackIcon from '@/img/BackIcon'
import CheckIcon from '@/img/Check'

function SelectIcon({ isUser, isDisableCoachmark, path }) {
  const { routeTo } = useRouter()
  const { id } = useParams()
  const [isTooltipOpen, setTooltipOpen] = useState(true)
  const [route, setRoute] = useState('')
  const [isKakaoOpen, setKakaoOpen] = useState(false)
  const [messageData, setMessageData] = useState(0)
  const [isMessageAlert, setMessageAlert] = useState(false)
  const [user, setUser] = useAtom(userAtom)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  useEffect(() => {
    const location = window.location
    const urlWithoutPathname = `${location.protocol}//${location.host}`
    setRoute(`${urlWithoutPathname}/main/${id}`)
    fetchMessage()
  }, [id, isMessageAlert])

  useEffect(() => {
    if (isKakaoOpen) {
      shareKaKaoLink({ title: 'rolling-paper', route, setKakaoOpen })
      setKakaoOpen(false) // shareKaKaoLink 호출 후 바로 isKakaoOpen을 false로 설정
    }
  }, [isKakaoOpen, route])

  const fetchMessage = async () => {
    const data = await getUserMessages('Message', id)
    setMessageData(data.length)
  }

  const navigateMessageList = () => {
    setMessageAlert(false)
    routeTo(`/messagelist/${user.uid}`)
  }

  const handleShareIconClick = () => {
    setKakaoOpen(true) // 클릭 이벤트에서는 상태만 변경
  }
  console.log('messageData', messageData)
  return (
    <Styled.SLayout isWriteMessage={path === 'writemessage'}>
      {path === 'messagelist' && (
        <>
          <div onClick={() => routeTo(`/writemessage/${id}`)}>
            <HeaderIcon icon={<img src={WriteIcon} alt="Write" />} />
          </div>
          {isTooltipOpen && (
            <Styled.STooltipLayout>
              <Styled.STooltipDiv>
                <Tooltip />
              </Styled.STooltipDiv>
              <Styled.SSpan>덕담을 작성해볼까요?</Styled.SSpan>
              <Styled.STooltipCloseDiv onClick={() => setTooltipOpen(false)}>
                <TooltipClose />
              </Styled.STooltipCloseDiv>
            </Styled.STooltipLayout>
          )}
        </>
      )}
      {path === 'writemessage' && (
        <>
          <Styled.SBackDiv onClick={() => routeTo(-1)}>
            <HeaderIcon icon={<BackIcon />} />
          </Styled.SBackDiv>
          <Styled.SCheckDiv>
            <HeaderIcon icon={<CheckIcon />} />
          </Styled.SCheckDiv>
        </>
      )}
      {path !== 'messagelist' && path !== 'writemessage' && (
        <>
          <div style={{ zIndex: '100001' }} id="kakao-link-btn" onClick={handleShareIconClick}>
            <HeaderIcon isDisableCoachmark={isDisableCoachmark} icon={<ShareIcon />} />
          </div>
          {messageData === 0 && (
            <div onClick={() => setMessageAlert(true)}>
              <HeaderIcon icon={<DefaultAlarm />} />
            </div>
          )}
          {isUser && messageData > 0 ? (
            <div onClick={() => setMessageAlert(true)}>
              <HeaderIcon icon={<ActiveAlarm />} />
            </div>
          ) : null}
          {isMessageAlert && (
            <Styled.SAlertDiv onClick={navigateMessageList}>
              <Alert number={messageData} navigateMessageList={navigateMessageList} />
            </Styled.SAlertDiv>
          )}
        </>
      )}
    </Styled.SLayout>
  )
}

export default SelectIcon
