import { sqBlack, sqRed, sqWhite } from '../../styles/constants';
import styled, { keyframes } from 'styled-components';

const textAppear = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
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
    animation: ${textAppear} 10s ease-in-out infinate;
    color: ${sqWhite};
    margin-top: 40px;

    & > img {
      width: 450px;
      margin: 200px 0 20px 0;
    }

    & > p {
      color: ${sqWhite};
      margin: 20px 0 300px 0;
      font-size: 20px;
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
