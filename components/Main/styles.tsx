import { sqBlack, sqRed, sqWhite } from '../../styles/constants';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Link from 'next/link';

const textAppear = keyframes`
  0% {
    width: 0px;
    opacity:0;
  }
  15% {
    width: 450px;
    opacity:0;

  }
  25% {
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
    height: 110vh;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > img {
      width: 450px;
      margin-bottom: 100px;
    }
  }

  .main__top--text {
    display: flex;
    height: 90%;
    flex-direction: column;
    justify-content: center;
    animation: ${textAppear} 7s ease-in-out infinite;

    & > img {
      padding: 0 0 20px 0;
    }

    & > p {
      color: ${sqWhite};
      margin: 10px 0 30px 0;
      font-size: 18px;
      line-height: 35px;
    }
  }
`;

export const Pomodoro = styled.div`
  margin: 300px 50px 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .tomato_btn {
    cursor: pointer;
    width: 300px;
    transition: width 0.2s ease-in-out;

    &: hover {
      width: 305px;
    }
  }

  & > .pomodoro--text {
    width: 470px;
    & > img {
      width: 400px;
      margin-left: -10px;
    }
    & > p {
      color: #107c10;
      font-size: 16px;
      margin-top: 80px;
    }
  }
`;
export const PomoLink = styled(Link)`
  margin-left: 50px;
  background-color: pink;
  height: 300px;
  width: 300px;
`;

export const Github = styled.div`
  margin-top: 300px;
  margin-bottom: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    cursor: pointer;
    transition: height 0.2s ease-in-out;
    margin-top: 50px;
    margin-bottom: 80px;
    height: 150px;
    &:hover {
      height: 155px;
    }
  }
  & > h2 {
    font-size: 70px;
    font-weight: 900;
    font-family: 'Noto Serif KR', serif;
  }
  & > h3 {
    margin-top: -15px;
    font-size: 45px;
    font-weight: 900;
    font-family: 'Noto Serif KR', serif;
  }
`;
