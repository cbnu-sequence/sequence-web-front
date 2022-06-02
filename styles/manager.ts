import styled from '@emotion/styled';
import { sqWhiteBoxShadow } from './constants';

export const ManagerBlock = styled.div`
  margin: 5rem 3rem;

  .cardblock {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .card {
    box-shadow: ${sqWhiteBoxShadow};
    margin: 2rem 3rem;
    padding: 8rem 3rem; //나중에 위아래 패딩만 수정하기
    width: 18%;
    text-align: center;
    cursor: pointer;

    @media screen and (max-width: 786px) {
      width: 100%;
    }
  }
`;
