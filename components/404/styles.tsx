import styled from '@emotion/styled';
import { sqRed, sqWhite, sqBlack, sqGray, sqPink } from '../../styles/constants';

export const TitleBlock = styled.div`
  font-size: 2.5rem;
  text-align: center;
  margin-top: 4.5rem;
  color: ${sqGray};
`;

export const SecondBlock = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

export const IconLinkBlock = styled.div`
  cursor: pointer;

  .icon {
    font-size: 5rem;
    color: ${sqPink};
    width: 45%;
    margin: 0 auto;
    text-align: center;
  }

  .btn {
    border: none;
    margin: 0 2rem;
    padding: 0.5rem;
    border-radius: 10px;
    font-size: 0.8rem;
  }
`;
