import styled from "styled-components";
import { Devices } from '@/style/Device'


interface SLayoutProps {
  isActiveImg: string;
}

export const SLayout = styled.picture<SLayoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${Devices.tablet} {
    width: 242px;
    height: 196px;
  }
`;