import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { sqBlack, sqWhite } from '../../styles/constants';

const textAppear = keyframes`
  0% {
    opacity:0;
  }
  50% {
    opacity:0.5;
  }
  100%{
    opacity:1;
  }
`;

export const IntroduceBlock = styled.div`
  padding-top: 60px;
  background-color: black;
  padding-bottom: 1rem;
`;

export const TopBlock = styled.div`
  width: 100%;
  height: 18rem;
  padding: 6rem;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${sqWhite};

  .top1 {
    animation: ${textAppear} 1.5s ease-in 1;
  }

  .top2 {
    animation: ${textAppear} 1.5s ease-in 1;
    font-size: 1rem;
  }
`;

export const MainBlock = styled.div`
  padding: 0;
`;

export const SquareBlock = styled.div`
  width: 80%;
  margin: 4rem auto;
  height: 25rem;
  padding: 1.5rem 3rem 1.5rem 3rem;
  color: black;
  box-shadow: 0px 12px 20px 0px rgba(240, 152, 152, 0.2);
  background-color: ${sqWhite};
  border-radius: 10px;

  .title {
    font-size: 2rem;
    text-align: center;
  }

  .content {
    padding-top: 2rem;
    font-size: 1rem;
    text-align: center;
  }

  .icons {
    display: flex;
    justify-content: space-around;
    color: black;
    padding: 6rem 0 2rem 0;
    font-size: 6rem;
  }

  .icons_name {
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1.5rem;
    width: 97.5%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      width: 92%;
    }
  }
`;
