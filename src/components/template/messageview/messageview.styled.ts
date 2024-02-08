import styled from 'styled-components'
import { Fontsize } from '@/style/font'

export const SWrapper = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const SWriter = styled.div`
  position: inherit;
  top: 14vh;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${Fontsize.Middle};
`
export const SContents = styled.div`
  position: inherit;
  top: 20vh;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${Fontsize.Small};
`
