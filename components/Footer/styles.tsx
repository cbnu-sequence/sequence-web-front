import styled from '@emotion/styled';
import { sqBlack, sqWhite, sqRed, sqLightGray, sqDarkGray } from '../../styles/constants';

export const FooterDiv = styled.footer`
  padding: 2rem;
  position: relative;
  transform: translateY(150%);
  bottom: 0;
  left: 0;
  background-color: ${sqLightGray};
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  & > img {
    object-fit: contain;
    width: 10%;
    min-width: 150px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1vw;
    min-font-size: 15px;

    .smallest {
      text-align: center;
      padding-top: 0.5rem;
      font-size: 10px;
      color: ${sqDarkGray};
    }
  }
`;
