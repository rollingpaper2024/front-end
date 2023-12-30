import color from '../../../style/color'
import styled from 'styled-components'
import font from '@/style/font'

export const SList = styled.div`
  width: 80%;
  border: 2px solid ${color.yellow[400]};
  height: 88px;
  background: ${color.yellow[200]};
  position: relative;
  display: flex;
  align-items: center;
  min-width: 334px;
`
export const ListWrapper = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 20px;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  width: 96%;
  margin: auto;
  border: 2px solid ${(props) => props.color};
  height: 70px;
  color: ${color.gray[600]};
`
export const ListTitle = styled.div`
  font-size: ${font.Small};
  font-weight: 600;
  width: 80%;
  z-index: 1;
`

export const ListDate = styled.div`
  font-size: ${font.Small};
  font-weight: 500;
  width: 20%;
  text-align: right;
`

export const ListText = styled.div`
  font-size: ${font.Small};
  font-weight: 500;
  width: 100%;
`

export const ListIcnLeft = styled.div`
  background-color: ${color.yellow[200]};
  position: absolute;
  top: 7px;
  left: 2%;
`
export const ListIcnRight = styled.div`
  transform: rotate(180deg);
  background-color: ${color.yellow[200]};
  position: absolute;
  right: 2%;
  bottom: 7px;
`
