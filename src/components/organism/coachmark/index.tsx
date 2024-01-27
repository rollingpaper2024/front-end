import React from 'react'
import CoachMarkBackground from '../../atom/background/CoachMarkBackground'
import * as Styled from './coachmark.styled'
import CloseIcon from '../../../assets/x.webp'

interface IProps {
  showCoachMark: boolean
  handleHideCoachMark: React.MouseEventHandler<HTMLDivElement>
}

function index({ handleHideCoachMark, showCoachMark }: IProps) {
  if (!showCoachMark) {
    return
  }
  return (
    <>
      <CoachMarkBackground />
      <Styled.SHightLightFirstTextDiv>
        <span>친구들에게 </span>
        <h1>공유</h1>
        <span> 하고 덕담을 받아봐요</span>
      </Styled.SHightLightFirstTextDiv>

      <Styled.SHightLightSecondTextDiv>
        <div>친구들에게 온 덕담을 읽어봐요</div>
        <div>덕담이 없는 상태에선 버튼이 활성화되지 않아요</div>
      </Styled.SHightLightSecondTextDiv>
      <Styled.SCloseDiv onClick={handleHideCoachMark}>
        <h6>다시보지 않기</h6>
        <img src={CloseIcon}></img>
      </Styled.SCloseDiv>
    </>
  )
}

export default index
