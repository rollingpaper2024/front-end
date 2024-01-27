import styled from 'styled-components'

export const SHightLightFirstTextDiv = styled.div`
  height: 15px;
  z-index: 1000001;
  display: flex;
  position: absolute;
  right: 15px;
  span {
    margin-right: 10px;
    color: #fffefc;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: -0.16px;
    text-transform: capitalize;
  }
  h1 {
    all: initial;
    color: #ef961c;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.16px;
    text-transform: capitalize;
    margin-right: 0px;
    display: inline-block;
  }
`
export const SHightLightSecondTextDiv = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  z-index: 1000001;
  color: #fffefc;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;
  text-transform: capitalize;
`

export const SCloseDiv = styled.div`
  cursor: pointer;
  z-index: 1000001;
  display: flex;
  color: #fffefc;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;
  text-transform: capitalize;
  position: absolute;
  top: 95%;
  right: 12px;
  h6 {
    margin-right: 5px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`
