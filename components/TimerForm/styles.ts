import styled from '@emotion/styled';
import { sqDarkGreen } from '../../styles/constants';

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
      outline: none;
      border: 6px solid ${sqDarkGreen};
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
      font-size: 24px;
      height: 2.5rem;
      width: 8rem;
      color: ${sqDarkGreen};
      margin-bottom: 1rem;
      border-radius: 14px;
      background-color: antiquewhite;
    }
  }
`;
