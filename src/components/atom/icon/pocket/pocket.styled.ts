import styled from "styled-components";
import { Devices } from '@/style/Device'


export const SLayout =styled.picture`
display: flex;
justify-content: center;
align-items: center;

@media ${Devices.tablet} {
    width:242px;
    height:196px;
  }
`