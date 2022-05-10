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
    height: 110vh;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > img {
      width: 400px;
    }
  }

  .main__top--text {
    margin-right: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: ${textAppear} 7s ease-in-out infinite;

    & > img {
      padding: 0 0 20px 0;
    }

    & > p {
      color: ${sqWhite};
      margin: 10px 0 10px 0;
      font-size: 18px;
      line-height: 35px;
    }
  }
  @media screen and (max-width: 898px) {
    .main__top {
      flex-direction: column;
      & > img {
        width: 60%;
        margin-bottom: 20px;
      }
    }
    .main__top--text {
      margin: 0;
      animation: none;
      width: 50%;
      & > p {
        color: ${sqWhite};
        margin: 10px 0 10px 0;
        font-size: 0.5em;
        line-height: 35px;
      }
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
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .pomodoro--text {
    width: 500px;

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
  .tomato_btn {
    cursor: pointer;
    width: 300px;

    transition: width 0.25s ease-in-out;

    &: hover {
      width: 305px;
    }
  }

  @media screen and (max-width: 898px) {
    flex-direction: column;
    & > .pomodoro--text {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;

      & > h1 {
        font-size: 4em;
      }

      & > p {
        font-size: 0.8em;
      }
    }
    .tomato_btn {
      padding: 20px;
      width: 250px;

      &: hover {
        width: 255px;
      }
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
  width: 30%;
  height: 30%:
  
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
