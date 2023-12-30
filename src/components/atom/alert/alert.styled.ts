import color from '../../../style/color'
import styled from 'styled-components'
import font from '@/style/font'

export const Alert = styled.button`
  background-color: ${color.gray[600]};
  height: 68px;
  width: 80%;
  color: ${color.white};
  font-size: ${font.Small};
  font-weight: 600;
  border-radius: 20px;
  min-width: 334px;
  position: relative;
  margin: 0 auto;
`
export const AlertWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
`

export const AlertLeft = styled.div`
  display: flex;
  align-items: center;
  left: 10px;
  position: relative;
`

export const AlertIcon = styled.div`
  position: relative;
  top: 50%;
`
export const AlertTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;
  left: 10px;
`
export const AlertTitle = styled.div`
  position: relative;
  font-size: ${font.Small};
  font-weight: 600;
`
export const AlertText = styled.div`
  position: relative;
  font-size: ${font.Tiny};
  font-weight: 300;
`

export const ArrowWrapper = styled.div`
  position: relative;
  right: 10px;
`
