import * as Styled from './mainbtn.styled'
import BtnBgLeft from '@/img/BtnBgLeft'
import BtnBgRight from '@/img/BtnBgRight'

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
        <Styled.RightBtn>
          <BtnBgRight />
        </Styled.RightBtn>
        <Styled.BtnText>{title}</Styled.BtnText>
      </Styled.SBtn>
    </>
  )
}

export default MainBtn
