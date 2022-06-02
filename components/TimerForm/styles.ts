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
      width: 30rem;
      height: 2rem;
    }
    button {
      font-size: 24px;
      width: 8rem;
      color: ${sqDarkGreen};
      margin-bottom: 1rem;
      border-radius: 14px;
      background-color: antiquewhite;
    }
  }
`;
