import { primaryColor, textColor, palette } from '../../../style/Color';
import styled from 'styled-components';

const MainBtn = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: ${primaryColor};
    color: ${textColor};
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: ${palette.hoverColor};
    }
    `;
export default MainBtn;