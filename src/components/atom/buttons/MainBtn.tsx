import * as Styled from './mainbtn.styled'
import BtnBgLeft from '@/img/BtnBgLeft'
import CoachMarkBorder from '@/components/atom/border/CoachMarkBorder'

interface MainBtnProps {
  title: string
  isDisabled: boolean
  isDisableCoachmark?: boolean
  onClick?: () => void
}

function MainBtn({ title, isDisabled, onClick, isDisableCoachmark }: MainBtnProps) {
  return (
    <>
      <Styled.SBtn
        $isDisabled={isDisabled}
        isDisableCoachmark={isDisableCoachmark}
        onClick={onClick}
        disabled={isDisabled}
      >
        <Styled.LeftBtn>
          <BtnBgLeft />
        </Styled.LeftBtn>
        <Styled.BtnText>{title}</Styled.BtnText>
        <Styled.RightBtn>
          <BtnBgLeft />
        </Styled.RightBtn>
      </Styled.SBtn>
    </>
  )
}

export default MainBtn
