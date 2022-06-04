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
      width: 25rem;
      height: 3rem;
      margin-top: 2rem;
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
      margin-bottom: 1rem;
      border-radius: 20px;
      background-color: ${sqLightBeige};
      &:hover {
        background-color: antiquewhite;
      }
      &:active {
        box-shadow: ${PpomoBoxShadow};
      }
    }
  }
`;
