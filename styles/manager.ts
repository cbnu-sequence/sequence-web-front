import styled from '@emotion/styled';
import { sqWhiteBoxShadow, sqBlack, sqGray } from './constants';

export const ManagerBlock = styled.div`
  margin: 5rem 3rem;
  margin-bottom: -16rem;

  .title_top1 {
    margin : 0 auto;
    text-align: center;
    font-size: 2.65rem;
    font-weight: bold;
    color: ${sqBlack};
    text-shadow: 0.13rem 0.2rem ${sqGray};
    @media screen and (max-width: 768px){
      font-size: 2.2rem;
  }
}

  .title_top2 {
    margin : 0 auto;
    margin-bottom : 3.5rem;
    text-align: center;
    font-size: 4.3rem;
    font-weight: bold;
    color: ${sqBlack};
    text-shadow: 0.13rem 0.2rem ${sqGray};
    @media screen and (max-width: 768px){
      font-size: 3rem;
  }
}

  .cardblock {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }
}
`;
