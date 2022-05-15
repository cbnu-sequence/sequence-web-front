import { sqBlack, sqRed, sqWhite, sqPink, sqLightGray, sqGray } from '../../styles/constants';
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
      height: 100vh;
      flex-direction: column;
      & > img {
        width: 60%;
      }
      & > .main__top--text {
        margin: 0 0 50px 0;
        animation: none;
        width: 70%;
        & > img {
          display: none;
        }

        & > p {
          font-size: 2.8vw;
        }
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
  height: 150vh;
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
        font-size: 9vw;
      }

      & > p {
        font-size: 2.1vw;
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
  height: 100vh;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
      margin-top: 20px;
      width: 200px;
      height: 60px;
      border-radius: 50px;
      border: 2px solid ${sqLightGray};
      transition: all 0.07s ease-in-out;
      &:hover {
        border: 2px solid ${sqPink};
        color: ${sqRed};
      }

      & > span {
        font-size: 12px;
        margin-left: 5px;
      }
    }
  }
`;
export const BigBox = styled.div`
  width: 300px;
  height: 300px;
  margin-left: 20px;
  & > img {
    box-shadow: 2px 2px 5px 2px ${sqGray};
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
  }
  @media screen and (max-width: 898px) {
    width: 200px;
  height: 200px;
  & > img {
    height: 200px;
  }
`;
export const SmallBox = styled.div`
  width: 140px;
  height: 140px;
  margin: 15px 0 15px 20px;
  & > img {
    box-shadow: 2px 2px 5px 2px ${sqGray};
    height: 140px;
    object-fit: cover;
    border-radius: 20px;
  }
  @media screen and (max-width: 898px) {
    display: none;
  }
`;

export const PomoLink = styled(Link)`
  width: 30%;
  height: 30%:
  
`;

export const Github = styled.div`
  height: 100vh;
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
  @media screen and (max-width: 898px) {
    & > h2 {
      font-size: 9vw;
    }

    & > h3 {
      margin-top: 0;
      font-size: 7vw;
    }
  }
`;

export const Footer = styled.div``;
