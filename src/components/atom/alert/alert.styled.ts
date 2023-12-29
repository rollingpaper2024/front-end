import color from '../../../style/color'
import styled from 'styled-components'
import font from '@/style/font'

export const Alert = styled.button`
  background-color: ${color.gray[600]};
  height: 68px;
  width: 80%;
  color: ${color.white}};
  font-size: ${font.Small};
  border-radius: 20px;
  font-weight: 600;
  border-radius: 20px;
`
export const AlertWrapper = styled.div`
  display: flex;
`

export const AlertIcon = styled.div`
  position: relative;
  top: 50%;
  left: 20px;
`
export const AlertTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const AlertTitle = styled.div`
  position: relative;
  font-size: ${font.Small};
  font-weight: 600;
`
export const AlertText = styled.div`
  position: relative;
  font-size: ${font.Tiny};
`
