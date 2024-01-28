import Color from '@/style/Color'
import styled from 'styled-components'
import * as Font from '@/style/font'
import { Devices } from '@/style/Device'

export const Alert = styled.button`
  background-color: ${Color.gray[600]};
  height: 68px;
  width: 80%;
  color: ${Color.white};
  font-size: ${Font.Fontsize.Small};
  font-weight: 600;
  border-radius: 8px;
  min-width: 334px;
  position: relative;
  top: -1vh;
  z-index: 100001;

  @media ${Devices.tablet} {
    top: -5vh;
  }
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
  font-size: ${Font.Fontsize.Small};
  font-weight: 600;
`
export const AlertText = styled.div`
  position: relative;
  font-size: ${Font.Fontsize.Tiny};
  font-weight: 300;
`

export const ArrowWrapper = styled.div`
  position: relative;
  right: 10px;
`
