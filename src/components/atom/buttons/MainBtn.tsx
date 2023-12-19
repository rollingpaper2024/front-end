import { black, orange, yellow } from '../../../style/Color';
import styled from 'styled-components';

const MainBtnstyle  = styled.button`
    width: 100%;
    height: 52px;
    border: 2px solid ${black};
    background-color: ${black};
    color: ${yellow};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: ${orange};
    }
    `;


    function MainBtn() {
  return (
    <MainBtnstyle>덕담 보내기</MainBtnstyle>
  )
}
export default MainBtn;