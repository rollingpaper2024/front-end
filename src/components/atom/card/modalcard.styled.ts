import Color from '../../../style/Color'
import styled from 'styled-components'
import * as Font from '@/style/Font'

export const SModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.gray[600]};
  height: 356px;
  width: 80%;
  border: 2px solid ${Color.yellow[300]};
  color: ${Color.white};
  font-size: ${Font.Fontsize.Small};
  font-weight: ${Font.Fontweight.Medium};
  max-width: 400px;
  min-width: 334px;
`
export const ModalTitle = styled.div`
  text-align: center;
  font-size: ${Font.Fontsize.Large};
  position: relative;
  top: -24px;
  font-weight: ${Font.Fontweight.Bold};
`

export const ModalContent = styled.div`
  text-align: center;
  position: relative;
  font-size: ${Font.Fontsize.Small};
  font-weight: ${Font.Fontweight.Medium};
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
  left: -44%;
  top: 6px;
`
export const ModalRightUp = styled.div`
  position: relative;
  top: -18px;
  right: -44%;
  transform: rotate(90deg);
`
export const ModalLeftDown = styled.div`
  position: relative;
  transform: rotate(270deg);
  top: 42px;
  left: -44%;
`
export const ModalRightDown = styled.div`
  position: relative;
  top: 18px;
  right: -44%;
  transform: rotate(180deg);
`
