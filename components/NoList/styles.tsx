import styled from '@emotion/styled';
import { sqDarkGray } from '../../styles/constants';

export const NoListDiv = styled.div`
  @keyframes shakeFlowerHead {
    0% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }

  .mainBox {
    padding: 10%;
    width: 50%;
    height: 20%;
    border: 0.35rem solid ${sqDarkGray};
    margin: 0 auto;
    margin-top: 8rem;
  }

  .flowerLogo_dg {
    display: block;
    margin: 0px auto;
    width: 5rem;
    animation: shakeFlowerHead 1s ease-in-out infinite alternate;
  }

  .english {
    font-size: 2rem;
    text-align: center;
    color: ${sqDarkGray};
  }

  .hangul {
    font-size: 2.3rem;
    text-align: center;
    color: ${sqDarkGray};
    font-weight: 450;
  }
`;
