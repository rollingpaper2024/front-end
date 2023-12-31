import * as Styled from './mainbtn.styled'
import BtnBgLeft from '@/img/BtnBgLeft'
import BtnBgRight from '@/img/BtnBgRight'

interface MainBtnProps {
  title: string
  isDisabled: boolean
  onClick?: () => void
}

function MainBtn({ title, isDisabled, onClick  }: MainBtnProps) {
  return (
    <>
      <Styled.SBtn $isDisabled={isDisabled} onClick={onClick}>
        <BtnBgLeft />
        <Styled.RightBtn>
          <BtnBgRight />
        </Styled.RightBtn>
        <Styled.BtnText>{title}</Styled.BtnText>
      </Styled.SBtn>
    </>
  )
}

export default MainBtn
