import Color from '@/style/Color'
import styled from 'styled-components'
import * as Font from '@/style/font'
import { Devices } from '@/style/Device'

export const SList = styled.div`
  width: 100%;
  border: 2px solid ${Color.yellow[400]};
  height: 88px;
  background: ${Color.yellow[200]};
  position: relative;
  display: flex;
  align-items: center;
  margin: 8px auto;
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

  @media ${Devices.mobileS} {
    padding: 6px 18px;
  }
`
export const ListTitle = styled.div`
  font-size: ${Font.Fontsize.Small};
  font-weight: ${Font.Fontweight.Bold};
  width: 69%;
  z-index: 1;

  @media ${Devices.mobileS} {
    font-size: ${Font.Fontsize.Tiny};
  }
`

export const ListDate = styled.div`
  font-size: ${Font.Fontsize.Small};
  font-weight: ${Font.Fontweight.Medium};
  width: 31%;
  text-align: right;

  @media ${Devices.mobileS} {
    font-size: ${Font.Fontsize.XSmall};
  }
`

export const ListText = styled.div`
  font-size: ${Font.Fontsize.Small};
  font-weight: ${Font.Fontweight.Medium};
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media ${Devices.mobileS} {
    font-size: ${Font.Fontsize.XSmall};
  }
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
