import React from 'react'
import color from '../../../style/color'
import styled from 'styled-components'
import font from '../../../style/font'

export const SModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${color.gray[600]};
  height: 356px;
  width: 80%;
  border: 2px solid ${color.yellow[300]};
  color: ${color.white}};
  font-size: ${font.Small};
  border-radius: 20px;
  position:absolute;
  
`

export const ModalTitle = styled.div`
  text-align: center;
  font-size: ${font.Large};
  position: relative;
  top: -24px;
  font-weight: 600;
`

export const ModalContent = styled.div`
  text-align: center;
  position: relative;
  top: 16px;
  font-size: ${font.Small};
`

export const ModalBtnWrapper = styled.div`
  top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  position: relative;
`
export const ModalLeftUp = styled.div`
  position: relative;
  left: -46%;
  top: 6px;
`
export const ModalRightUp = styled.div`
  position: relative;
  top: -18px;
  right: -46%;
  transform: rotate(90deg);
`
export const ModalLeftDown = styled.div`
  position: relative;
  transform: rotate(270deg);
  top: 68px;
  left: -46%;
`
export const ModalRightDown = styled.div`
  position: relative;
  top: 42px;
  right: -46%;
  transform: rotate(180deg);
`
