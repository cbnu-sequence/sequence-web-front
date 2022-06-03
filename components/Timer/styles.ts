import styled from '@emotion/styled';
import { sqDarkGreen } from '../../styles/constants';
export const TimerDiv = styled.div`
  display: flex;
  height: 15rem;
  font-size: 10rem;
  justify-content: center;
  align-items: flex-end;
  & > div {
    display: flex;
    justify-content: center;
    width: 13rem;
    height: 15rem;
    color: white;
    background-color: ${sqDarkGreen};
    background-color: rgba(255, 255, 255, 0.5);
    margin-right: 30px;
    margin-bottom: 2rem;
  }
`;
