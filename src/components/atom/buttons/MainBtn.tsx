import * as Styled from './mainbtn.styled'
import BtnBgLeft from '@/img/BtnBgLeft'

interface MainBtnProps {
  title: string
  isDisabled: boolean
  onClick?: () => void
}

function MainBtn({ title, isDisabled, onClick }: MainBtnProps) {
  return (
    <>
      <Styled.SBtn $isDisabled={isDisabled} onClick={onClick}>
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
