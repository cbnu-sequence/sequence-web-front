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
`;

export const TopBlock = styled.div`
  width: 100%;
  height: 20rem;
  padding: 6rem;
  background-color: black;
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
  background-color: #efefef8b;
  padding: 3rem;
`;

export const SquareBlock = styled.div`
  width: 80%;
  margin: 3rem auto;
  height: 25rem;
  padding: 1.5rem 3rem 1.5rem 3rem;
  color: black;
  box-shadow: 0px 8px 16px 0px rgba(94, 152, 196, 0.2);
  background-color: rgba(255, 255, 255, 0.701);
  border-radius: 10px;

  .title {
    font-size: 2rem;
  }

  .content {
    padding-top: 1rem;
    font-size: 1rem;
  }
`;
