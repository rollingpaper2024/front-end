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
import MainModal from '@/components/organism/modal/MainModal'
import Delete from '@/img/Delete'
import { deleteUserMessage } from '@/api'

function SelectIcon({ isUser, isDisableCoachmark, path }) {
  const { routeTo } = useRouter()
  const { id, messageId } = useParams()
  const [isTooltipOpen, setTooltipOpen] = useState(true)
  const [route, setRoute] = useState('')
  const [isKakaoOpen, setKakaoOpen] = useState(false)
  const [messageData, setMessageData] = useState(0)
  const [isMessageAlert, setMessageAlert] = useState(false)
  const [user, setUser] = useAtom(userAtom)
  const [isModalOpen, setIsModalOpen] = useState(false)
  //덕담 작성 테스트용 계정 uid
  const adminUsers = ['k3rRTQHXdAN13FGa5HOmWDoSsT72', 'u5CCGFL2rtSztZ3QVQh7Rn2Ms2H2']

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
    if (user.uid) {
      setRoute(`${urlWithoutPathname}/main/${user.uid}`)
    }
    fetchMessage()
  }, [user.uid, isMessageAlert, isKakaoOpen])

  useEffect(() => {
    if (isKakaoOpen) {
      fetchShareKakaoLink()
      setKakaoOpen(false) // shareKaKaoLink 호출 후 바로 isKakaoOpen을 false로 설정
    }
  }, [isKakaoOpen, route])

  const fetchShareKakaoLink = async () => {
    await shareKaKaoLink({ title: '너의 덕담이 보여', route, setKakaoOpen })
  }
  const fetchMessage = async () => {
    const data = await getUserMessages('Message', user.uid)
    setMessageData(data.length)
  }

  const navigateMessageList = () => {
    setMessageAlert(false)
    routeTo(`/messagelist/${user.uid}`)
  }

  const handleShareIconClick = () => {
    setKakaoOpen(true)
  }
  const deleteMessage = async () => {
    const response = await deleteUserMessage('Message', messageId)
    if (response) {
      routeTo(-1)
    }
  }

  return (
    <Styled.SLayout isWriteMessage={path === 'messagelist' || 'writemessage'}>
      {path === 'messagelist' && !messageId ? (
        <>
          <MainModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            title="잠깐"
            desc1="5초도 안걸리는 회원가입하고"
            desc2="마음을 담은 덕담을 주고 받아보아요."
            route="/login"
            agree1="네, 가입할래요"
            agree2="나중에 할래요"
          />
          <Styled.SBackDiv
            isUser={user.uid === id && !adminUsers.includes(user.uid)}
            onClick={() => routeTo(-1)}
          >
            <HeaderIcon icon={<BackIcon />} />
          </Styled.SBackDiv>
          {/* {(adminUsers.includes(user.uid) || user.uid !== id) && (
            <Styled.SCheckDiv>
              <div onClick={() => routeTo(`/writemessage/${id}`)}>
                <HeaderIcon icon={<img src={WriteIcon} alt="Write" />} />
              </div>
            </Styled.SCheckDiv>
          )} */}
          <Styled.SCheckDiv>
            <HeaderIcon
              onClick={() => routeTo(`/writemessage/${id}`)}
              icon={<img src={WriteIcon} alt="Write" />}
            />
          </Styled.SCheckDiv>
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
      ) : null}
      {/* 메세지 리스트 페이지  */}
      {path === 'messagelist' && messageId && user.uid === id ? (
        <Styled.SMessageListDiv>
          <Styled.SBackDiv onClick={() => routeTo(-1)}>
            <HeaderIcon icon={<BackIcon />} />
          </Styled.SBackDiv>
          <Styled.SDeleteIconDiv
            style={{ cursor: 'pointer', zIndex: '100001' }}
            onClick={deleteMessage}
          >
            <HeaderIcon icon={<Delete />} />
          </Styled.SDeleteIconDiv>
        </Styled.SMessageListDiv>
      ) : path === 'messagelist' && messageId ? (
        <Styled.SBackDiv onClick={() => routeTo(-1)}>
          <HeaderIcon icon={<BackIcon />} />
        </Styled.SBackDiv>
      ) : null}
      {/* 메시지 상세페이지 */}
      {path === 'writemessage' && (
        <>
          <Styled.SBackDiv onClick={() => routeTo(-1)}>
            <HeaderIcon icon={<BackIcon />} />
          </Styled.SBackDiv>
          <Styled.SCheckDiv>
            <HeaderIcon
              id="kakao-link-btn"
              isDisableCoachmark={isDisableCoachmark}
              icon={<ShareIcon />}
              onClick={handleShareIconClick}
            />
            {messageData === 0 && (
              <HeaderIcon onClick={() => setMessageAlert(true)} icon={<DefaultAlarm />} />
            )}
            {isUser && messageData > 0 ? (
              <HeaderIcon onClick={() => setMessageAlert(true)} icon={<ActiveAlarm />} />
            ) : null}
            {isMessageAlert && (
              <Styled.SAlertDiv onClick={navigateMessageList}>
                <Alert number={messageData} navigateMessageList={navigateMessageList} />
              </Styled.SAlertDiv>
            )}
          </Styled.SCheckDiv>
        </>
      )}
      {/* 메세지 작성페이지 */}
      {path !== 'messagelist' && path !== 'writemessage' && path !== '' && (
        <>
          <HeaderIcon
            id="kakao-link-btn"
            onClick={handleShareIconClick}
            isDisableCoachmark={isDisableCoachmark}
            icon={<ShareIcon />}
          />
          {messageData === 0 && (
            <HeaderIcon onClick={() => setMessageAlert(true)} icon={<DefaultAlarm />} />
          )}
          {isUser && messageData > 0 ? (
            <HeaderIcon icon={<ActiveAlarm />} onClick={() => setMessageAlert(true)} />
          ) : null}
          {isMessageAlert && (
            <Styled.SAlertDiv onClick={navigateMessageList}>
              <Alert number={messageData} navigateMessageList={navigateMessageList} />
            </Styled.SAlertDiv>
          )}
        </>
      )}
      {/* 메세지 리스트, 메세지 작성페이지 아닐때 */}
    </Styled.SLayout>
  )
}

export default SelectIcon
