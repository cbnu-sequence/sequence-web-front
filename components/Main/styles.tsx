import { sqBlack, sqRed, sqWhite, sqPink, sqLightGray } from '../../styles/constants';
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
    height: 900px;
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
    animation: ${textAppear} 7s ease-in-out infinite;

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
export const SQProject = styled.div`
  background-color: white;
`;
export const BtnDiv = styled.div`
  background-color: white;
`;
export const CircleBtn = styled.div`
  background-color: white;
`;
export const Content = styled.div`
  background-color: white;
`;

export const Pomodoro = styled.div`
  margin: 400px 50px 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .tomato_btn {
    cursor: pointer;
    width: 300px;
    transition: width 0.2s ease-in-out;

    &: hover {
      width: 310px;
    }
  }

  & > .pomodoro--text {
    width: 470px;

    & > h1 {
      font-size: 70px;
      font-weight: 900;
      font-family: 'Noto Serif KR', serif;
      color: #fa0020;
    }

    & > span {
      font-weight: 500;
      display: block;
      margin-top: 80px;
      font-size: 17px;
      color: #0e660e;
    }

    & > p {
      color: #107c10;
      font-size: 16px;
      margin-top: 5px;
    }
  }
`;
export const HomePhoto = styled.div`
  margin-top: 400px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
      margin-top: 20px;
      width: 200px;
      height: 60px;
      border-radius: 50px;
      border: 3px solid ${sqLightGray};
      transition: box-shadow 0.05s ease-in-out;
      &:hover {
        box-shadow: 1px 1px 6px 1px ${sqLightGray};
      }

      & > span {
        font-size: 12px;
        margin-left: 5px;
      }
    }
  }
`;
export const BigBox = styled.div`
  background-color: black;
  width: 300px;
  height: 300px;
  border-radius: 10%;
  margin-left: 20px;
`;
export const SmallBox = styled.div`
  background-color: gray;
  width: 140px;
  height: 140px;
  border-radius: 10%;
  margin: 15px 0 15px 20px;
`;

export const PomoLink = styled(Link)`
  margin-left: 50px;
  background-color: pink;
  height: 300px;
  width: 300px;
`;

export const Github = styled.div`
  margin-top: 400px;
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

export const Footer = styled.div``;
