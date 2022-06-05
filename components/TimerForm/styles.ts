import styled from '@emotion/styled';
import { PpomoBoxShadow, sqDarkGreen, sqGreen, sqLightBeige } from '../../styles/constants';

export const TimerFormDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      padding: 15px;
      outline: none;
      border: 6px solid ${sqGreen};
      width: 18rem;
      height: 3rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      ::placeholder {
        padding-left: 0.4rem;
        font-size: 18px;
        font-weight: 700;
      }
    }
    button {
      padding-bottom: 4px;
      font-size: 24px;
      font-weight: 500;
      height: 2.8rem;
      width: 8.5rem;
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

      @media screen and (max-width: 768px) {
        padding-bottom: 3px;
        height: 2.5rem;
        width: 7rem;
        font-size: 20px;
      }
    }
  }
`;
