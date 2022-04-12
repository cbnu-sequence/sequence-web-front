import { sqBlack, sqRed, sqWhite } from '../../styles/constants';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const textAppear = keyframes`
  0% {
    width: 0px;
    opacity:0;
  }
  10% {
    width: 450px;
    opacity:0;

  }
  20% {
    width: 450px;
    opacity:1;
  }
  100%{
    width: 450px;
    opacity:1;
  }
  
`;

export const MainDiv = styled.div`
  background-color: ${sqWhite};

  .main__top {
    height: 700px;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > img {
      width: 450px;
      margin-bottom: 60px;
    }
  }
  .main__top--text {
    animation: ${textAppear} 10s ease-in-out infinite;

    margin-top: 40px;

    & > img {
      margin: 200px 0 20px 0;
    }

    & > p {
      color: ${sqWhite};
      margin: 20px 0 300px 0;
      font-size: 18px;
      line-height: 35px;
    }
  }
`;

export const Github = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    height: 150px;
  }
  & > h1 {
    font-size: 100px;
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Noto Serif KR', serif;
  }
`;
