import Color from '@/style/Color'
import styled from 'styled-components'
import * as Font from '@/style/font'

interface BtnProps {
  checked: boolean
}

export const Swrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const Sbutton = styled.button<BtnProps>`
  width: 30%;
  height: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: ${(props) =>
    props.checked ? `2px solid ${Color.pointColor}` : `2px solid ${Color.gray[400]}`};
  background-color: ${(props) => (props.checked ? `rgb(239, 150, 28, 0.2);` : `none`)};
  &:hover {
    background-color: rgb(239, 150, 28, 0.2);
  }
`
export const Stext = styled.p`
  margin-top: 10px;
  font-size: ${Font.Fontsize.Small};
  font-weight: ${Font.Fontweight.Medium};
`
