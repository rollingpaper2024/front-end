import Color from '@/style/Color'
import styled from 'styled-components'
import * as Font from '@/style/font'

export const Swrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const Sbutton = styled.button`
  width: 30%;
  height: 120px;
  border: 2px solid ${Color.gray[400]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;

  &:hover {
    border: 2px solid ${Color.pointColor};
  }
  &:active {
    border: 2px solid ${Color.pointColor};
  }
`
export const Stext = styled.p`
  margin-top: 10px;
  font-size: ${Font.Fontsize.Small};
  font-weight: ${Font.Fontweight.Medium};
`
