import styled from '@emotion/styled';
import { sqBlack, sqWhite, sqRed, sqLightGray } from '../../styles/constants';

export const FooterDiv = styled.footer`
  background-color: ${sqLightGray};
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  & > div {
    margin-top: 50px;
    width: 12%;
  }
`;
