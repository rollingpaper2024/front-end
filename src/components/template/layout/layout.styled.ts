import styled from 'styled-components'
import backgroundImg from "@/assets/backgroundLayout.webp"


export const SLayout = styled.main`
  margin: auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`
