import * as Styled from './mainbtn.styled'
import BtnBgLeft from '@/img/BtnBgLeft'

interface MainBtnProps {
  title: string
  isDisabled: boolean
}

function MainBtn({ title, isDisabled }: MainBtnProps) {
  return (
    <>
      <Styled.SBtn $isDisabled={isDisabled}>
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
