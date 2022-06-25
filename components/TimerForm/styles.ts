import styled from '@emotion/styled';
import { PpomoBoxShadow, sqDarkGreen, sqDeepDarkGreen, sqGreen, sqLightBeige } from '../../styles/constants';

export const TimerFormDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px) {
      position: relative;
      & > input {
        position: relative;
        top: -20px;
      }
    }
    input {
      padding: 15px;
      outline: none;
      border: 6px solid ${sqGreen};
      width: 18rem;
      height: 3rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      ::placeholder {
        padding-left: 0.4rem;
        font-size: 18px;
        font-weight: 700;
      }
    }
    .timer_btn {
      position: relative;
      top: -60px;
      width: 20rem;
      display: flex;
      justify-content: center;
      background-color: ${sqDarkGreen};
      button {
        padding-bottom: 4px;
        font-size: 24px;
        font-weight: 500;
        height: 3rem;
        width: 9rem;
        color: ${sqDarkGreen};
        margin-bottom: 3rem;
        border-radius: 20px;
        background-color: ${sqLightBeige};
        cursor: pointer;
        transition: all 0.1s ease-in-out;
        &:hover {
          background-color: antiquewhite;
        }
        &:active {
          box-shadow: ${PpomoBoxShadow};
        }
      }
      @media screen and (max-width: 768px) {
        padding-bottom: 3px;
        height: 4rem;
        top: -108px;
        width: 10rem;
        position: relative;
        bottom: 100px;
        font-size: 20px;
      }
    }
  }
`;
