import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { PpomoBoxShadow, sqDarkGreen, sqDeepDarkGreen, sqWhite } from '../../styles/constants';

type TimerProps = {
  isActive: boolean;
};

const blink = keyframes`
  20% {
    border-color: #306862;
  }
  40% {
    border-color: #4E7470;
  }
  60% {
    border-color: #2D646F;
  }
  80% {
    border-color: #656F70;
  }
  100% {
    border-color: #527176;
  }
`;
export const TimerDiv = styled.div<TimerProps>`
  display: flex;
  height: 23rem;
  font-size: 7rem;
  margin-top: 3rem;
  width: 100%;
  .wrapper {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 2rem;
    height: 100%;
    border: 18px solid #527176;
    animation: ${({ isActive }) =>
      isActive
        ? css`
            ${blink} 4s ease-in-out infinite
          `
        : 'none'};
    & > div {
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 13rem;
      height: 15rem;
      color: white;
      background-color: ${sqDeepDarkGreen};
      box-shadow: ${PpomoBoxShadow};
      border-radius: 25px;
      margin-right: 15px;
      margin-left: 15px;
      margin-bottom: 0.5rem;
      .units {
        font-size: 16px;
        font-weight: 100;
        margin-bottom: 25px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    width: 100%;
    .wrapper {
      margin-top: 30px;
      height: 80%;
      width: 18rem;
      & > div {
        width: 100%;
        height: 7.5rem;
        padding: 20px;
        margin-right: 5px;
        margin-left: 5px;
        .units {
          font-size: 11px;
          margin-bottom: 15px;
        }
      }
    }
  }
`;
