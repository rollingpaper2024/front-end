import styled from 'styled-components'
import { Fontsize } from '@/style/font'
import Color from '@/style/Color'

export const SWrapper = styled.input`
  height: 64px;
  width: 100%;
  box-shadow: 0px 0px 11.2px 0px rgba(0, 0, 0, 0.05);
  border: none;
  margin-top: 20px;
  padding: 0 10px;
`

export const SDesc = styled.p`
  color: ${Color.gray[600]};
  font-family: Pretendard;
  font-size: ${Fontsize.Small};
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.16px;
  text-transform: capitalize;
  white-space: nowrap;
  margin-left: 24px;
  white-space: break-spaces;
`
