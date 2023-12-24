import React from 'react'
import * as Styled from './mainbtn.styled'
import styled from 'styled-components'
import BtnBgLeft from '@/img/BtnBgLeft'
import BtnBgRight from '@/img/BtnBgRight'

const RightBtn = styled.div`
  position: relative;
  left: 88.2%;
  top: -56px;
`

const BtnText = styled.div`
  text-align: center;
  position: relative;
  top: -92px;
`

interface MainBtnProps {
  title: string
  isDisabled: boolean
}

function MainBtn({ title, isDisabled }: MainBtnProps) {
  return (
    <>
      <Styled.SBtn $isDisabled={isDisabled}>
        <BtnBgLeft />
        <RightBtn>
          <BtnBgRight />
        </RightBtn>
        <BtnText>{title}</BtnText>
      </Styled.SBtn>
    </>
  )
}

export default MainBtn
