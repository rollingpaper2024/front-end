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

  console.log(route)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  // useEffect(() => {
  //   shareKaKaoLink({ title: 'rolling-paper', route: route })
  // }, [isKakaoOpen])

  useEffect(() => {
    const location = window.location
    const urlWithoutPathname = location.protocol + '//' + location.host
    setRoute(`${urlWithoutPathname}/main/${id}`)
  }, [])
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
            <>
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
            </>
          )}
        </>
      ) : (
        <>
          <div
          style={{zIndex:"100001"}}
            id="kakao-link-btn"
            onClick={() => {
              setKakaoOpen(true)
              shareKaKaoLink({ title: 'rolling-paper', route: route })
            }}
          >
            <HeaderIcon isDisableCoachmark={isDisableCoachmark} icon={<ActiveHeaderIcon />} />
          </div>

          {isUser && <HeaderIcon icon={<ActiveHeaderIcon />} />}
        </>
      )}
    </Styled.SLayout>
  )
}

export default SelectIcon
