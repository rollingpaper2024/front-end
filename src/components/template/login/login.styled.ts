import Styled from 'styled-components'
import { Devices } from '@/style/Device'

export const SBtnLayout = Styled.div`
width :100%;
height:65vh;
display:flex;
justify-content: flex-end;
flex-direction: column;
align-items: center;
gap:1rem;
@media ${Devices.tablet} {
    height:55vh;
}
`
export const SBtn = Styled.button`
width:472px;
height:52px;
display: flex;
justify-content: center;
align-items: center;
background-color:#F2F2F2;
border-radius:10px;
h3{
    font-size:12px;
    font-weight:600;
}
`
