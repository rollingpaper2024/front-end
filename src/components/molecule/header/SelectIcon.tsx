import * as Styled from './selecticon.styled'
import React, { useState, useEffect } from 'react'
import HeaderIcon from '@/components/atom/icon/header/HeaderIcon'
import ActiveHeaderIcon from '@/img/HeaderIcon'
import WriteIcon from '@/assets/write.webp'
import { useRouter } from '@/hooks/useRouter'
import { useParams } from 'react-router-dom'
import Tooltip from '@/img/Tooltip'
import TooltipClose from '@/img/TooltipClose'
import { shareKaKaoLink } from '../../../utils/shareKaKaoLink'
import Alert from '@/components/atom/alert/Alert'
import { getUserMessages } from '@/api'
// import ShareIcon from '@/assets/share.webp'
// import DefaultAlarmIcon from '@/assets/default.webp'
// import AlarmIcon from '@/assets/new_message.webp'
import ShareIcon from '@/img/ShareIcon'
import DefaultAlarm from '@/img/DefaultAlarm'
import ActiveAlarm from '@/img/ActiveAlarm'

function SelectIcon({
  isUser,
  isDisableCoachmark,
  path,
}: {
  isUser?: boolean
  isDisableCoachmark?: boolean
  path?: string
}) {
  const { routeTo } = useRouter()
  const { id } = useParams()
  const [isTooltipOpen, setTooltipOpen] = useState(true)
  const [route, setRoute] = useState(null)
  const [isKakaoOpen, setKakaoOpen] = useState(false)
  const [messageData, setMessageData] = useState(0)
  const [isMessageAlert, setMessageAlert] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  useEffect(() => {
    const location = window.location
    const urlWithoutPathname = location.protocol + '//' + location.host
    setRoute(`${urlWithoutPathname}/main/${id}`)
    fetchMessage()
  }, [])

  const fetchMessage = async () => {
    const messageData = await getUserMessages('Message', id)
    setMessageData(messageData.length)
  }
  const navigateMessageList = () => {
    console.log('rearaew')
    setMessageAlert(false)
    routeTo(`/messagelist/${id}`)
  }
  console.log('messageData', messageData)
  return (
    <Styled.SLayout>
      {path === 'messagelist' ? (
        <>
          <div
            onClick={() => {
              routeTo(`/writemessage/${id}`)
            }}
          >
            <HeaderIcon icon={<img src={WriteIcon} alt="Write" />} />
          </div>
          {isTooltipOpen && (
            <Styled.STooltipLayout>
              <Styled.STooltipDiv>
                <Tooltip />
              </Styled.STooltipDiv>
              <Styled.SSpan>덕담을 작성해볼까요?</Styled.SSpan>
              <Styled.STooltipCloseDiv
                onClick={() => {
                  setTooltipOpen(false)
                }}
              >
                <TooltipClose />
              </Styled.STooltipCloseDiv>
            </Styled.STooltipLayout>
          )}
        </>
      ) : (
        <>
          <div
            style={{ zIndex: '100001' }}
            id="kakao-link-btn"
            onClick={() => {
              setKakaoOpen(true)
              shareKaKaoLink({ title: 'rolling-paper', route: route })
            }}
          >
            <HeaderIcon isDisableCoachmark={isDisableCoachmark} icon={<ShareIcon />} />
          </div>

          {isUser &&
            (messageData > 0 ? (
              <div onClick={() => setMessageAlert(true)}>
                <HeaderIcon icon={<ActiveAlarm />} />
              </div>
            ) : messageData === 0 ? (
              <div onClick={() => setMessageAlert(true)}>
                <HeaderIcon icon={<DefaultAlarm />} />{' '}
              </div>
            ) : null)}
          <Styled.SAlertDiv
            onClick={() => {
              navigateMessageList()
            }}
          >
            {isMessageAlert && (
              <Alert number={messageData} navigateMessageList={navigateMessageList} />
            )}
          </Styled.SAlertDiv>
        </>
      )}
    </Styled.SLayout>
  )
}

export default SelectIcon
