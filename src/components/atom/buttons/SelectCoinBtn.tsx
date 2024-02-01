import { useState, useEffect } from 'react'
import GoldCoinIcn from '@/img/GoldCoinIcn'
import SilverCoinIcn from '@/img/SilverCoinIcn'
import BronzeCoinIcn from '@/img/BronzeCoinIcn'
import * as Styled from './selectcoinbtn.styled'
import Color from '@/style/Color'
import RadioBtn from '@/components/atom/radio/RadioBtn'

interface SelectCoinBtnProps {
  onColorSelected: (color: string) => void
  selectedCoinColor: string
  setSelectedCoinColor: React.Dispatch<React.SetStateAction<string>>
}

function SelectCoinBtn({
  onColorSelected,
  setSelectedCoinColor,
  selectedCoinColor,
}: SelectCoinBtnProps) {
  const handleBtnClick = (color: string) => {
    onColorSelected(color)
    setSelectedCoinColor(color)
  }

  return (
    <>
      <Styled.Swrapper>
        <Styled.Sbutton
          checked={selectedCoinColor === `${Color.cashColor[400]}`}
          onClick={() => handleBtnClick(`${Color.cashColor[400]}`)}
        >
          <GoldCoinIcn />
          <Styled.Stext>금화</Styled.Stext>
        </Styled.Sbutton>
        <Styled.Sbutton
          checked={selectedCoinColor === `${Color.cashColor[500]}`}
          onClick={() => handleBtnClick(`${Color.cashColor[500]}`)}
        >
          <SilverCoinIcn />
          <Styled.Stext>은화</Styled.Stext>
        </Styled.Sbutton>
        <Styled.Sbutton
          checked={selectedCoinColor === `${Color.cashColor[600]}`}
          onClick={() => handleBtnClick(`${Color.cashColor[600]}`)}
        >
          <BronzeCoinIcn />
          <Styled.Stext>동화</Styled.Stext>
        </Styled.Sbutton>
      </Styled.Swrapper>
    </>
  )
}

export default SelectCoinBtn
