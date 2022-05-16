import styled from '@emotion/styled';
import { sqBlack, sqWhite, sqRed, sqLightGray } from '../../styles/constants';

export const FooterDiv = styled.footer`
  background-color: ${sqLightGray};
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  & > img {
    object-fit: contain;
    width: 14%;
    min-width: 150px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1vw;
    min-font-size: 15px;
  }
`;
