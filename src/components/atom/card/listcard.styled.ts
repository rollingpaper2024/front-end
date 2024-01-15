import Color from '@/style/Color'
import styled from 'styled-components'
import * as Font from '@/style/font'

export const SList = styled.div`
  width: 86%;
  border: 2px solid ${Color.yellow[400]};
  height: 88px;
  background: ${Color.yellow[200]};
  position: relative;
  display: flex;
  align-items: center;
  min-width: 334px;
  margin: 10px auto;
`
export const ListWrapper = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 28px;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  width: 96%;
  margin: auto;
  height: 70px;
  color: ${Color.gray[600]};
  border: 2px solid ${(props) => props.color};
`
export const ListTitle = styled.div`
  font-size: ${Font.Fontsize.Small};
  font-weight: ${Font.Fontweight.Bold};
  width: 70%;
  z-index: 1;
`

export const ListDate = styled.div`
  font-size: ${Font.Fontsize.Small};
  font-weight: ${Font.Fontweight.Medium};
  width: 30%;
  text-align: right;
`

export const ListText = styled.div`
  font-size: ${Font.Fontsize.Small};
  font-weight: ${Font.Fontweight.Medium};
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const ListIcnLeft = styled.div`
  background-color: ${Color.yellow[200]};
  position: absolute;
  top: 7px;
  left: 2%;
`
export const ListIcnRight = styled.div`
  transform: rotate(180deg);
  background-color: ${Color.yellow[200]};
  position: absolute;
  right: 2%;
  bottom: 7px;
`
