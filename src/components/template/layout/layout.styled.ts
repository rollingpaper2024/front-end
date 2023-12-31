import styled from 'styled-components'
import backgroundImg from "@/assets/backgroundLayout.jpg"


export const SLayout = styled.main`
  margin: auto;
  max-width: 600px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
`
