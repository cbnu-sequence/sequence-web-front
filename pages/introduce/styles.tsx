import styled from '@emotion/styled';
import { sqBlack, sqLightGray, sqWhite } from '../../styles/constants';

export const IntroduceBlock = styled.div`
  padding-top: 60px;
  background-color: ${sqWhite};
  padding-bottom: 1rem;
`;

export const TopBlock = styled.div`
  width: 100%;
  height: 18rem;
  padding: 6rem;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${sqBlack};

  @keyframes textAppear {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  .top1 {
    animation: textAppear 1.5s ease-in 1;
  }

  .top2 {
    animation: textAppear 1.5s ease-in 1;
    font-size: 1rem;
  }
`;

export const MainBlock = styled.div`
  padding: 0;
`;

export const SquareBlock = styled.div`
  width: 60%;
  margin: 2rem auto 6rem;
  padding: 1.5rem 3rem 3rem 3rem;
  color: black;
  box-shadow: 0px 12px 20px 0px rgba(77, 73, 73, 0.2);
  background-color: ${sqWhite};
  border-radius: 10px;

  @keyframes rotateBox {
    0% {
      transform: rotate(-0.5deg);
    }
    50% {
      transform: rotate(0.5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  &:hover {
    animation: rotateBox 0.2s 1;
  }

  .title {
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    font-family: Georgia, sans-serif;
    color: brown;
  }

  .content {
    padding-top: 2rem;
    font-size: 1rem;
    text-align: center;
  }

  .culture_content {
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: center;
    font-weight: bold;
    list-style: none;
    & > li {
      padding-top: 1.5rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  .icons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: black;
    padding: 6rem 0 2rem 0;
    font-size: 4.5rem;
  }

  .icons_name {
    display: flex;
    font-weight: bold;
    font-size: 1.3rem;
    width: 100%;
    margin: 0 auto;

    & > p {
      width: 33.333%;
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;
