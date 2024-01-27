import * as Styled from './selecticon.styled'
import React, { useState } from 'react'
import HeaderIcon from '@/components/atom/icon/header/HeaderIcon'
import ActiveHeaderIcon from '@/img/HeaderIcon'
import WriteIcon from '@/assets/write.webp'
import { useRouter } from '@/hooks/useRouter'
import { useParams } from 'react-router-dom'
import Tooltip from '@/img/Tooltip'
import TooltipClose from '@/img/TooltipClose'

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
          <HeaderIcon isDisableCoachmark={isDisableCoachmark} icon={<ActiveHeaderIcon />} />
          {isUser && <HeaderIcon icon={<ActiveHeaderIcon />} />}
        </>
      )}
    </Styled.SLayout>
  )
}

export default SelectIcon
