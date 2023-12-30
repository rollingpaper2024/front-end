import color from '../../../style/color'
import styled from 'styled-components'
import font from '@/style/font'

export const SList = styled.div`
  width: 80%;
  border: 1px solid ${color.yellow[400]};
  height: 88px;
  background: ${color.yellow[200]};
`
export const ListIcnWrapper = styled.div`
  width: auto;
  height: auto;
  position: absolute;
`
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  flex-wrap: wrap;
`
export const ListTitle = styled.div`
  font-size: ${font.Small};
  font-weight: 600;
  width: 80%;
`

export const ListDate = styled.div`
  font-size: ${font.Small};
  font-weight: 500;
  width: 20%;
`

export const ListText = styled.div`
  font-size: ${font.Small};
  font-weight: 500;
  width: 100%;
`
