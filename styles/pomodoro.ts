import styled from '@emotion/styled';
import { sqDarkGreen, sqRed, sqWhite } from '../styles/constants';

export const PomodoroBlock = styled.div`
  position: absolute;
  background-color: ${sqDarkGreen};
  width: 100%;
  height: 100%;
  & > span {
    color: ${sqRed};
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 290px;
    font-size: 20px;
  }
`;

export const RankingBtn = styled.button`
  position: absolute;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  width: 10rem;
  height: 2.5rem;
  left: 50%;
  margin: 5rem 0 0 -5rem;
  color: ${sqDarkGreen};
  background-color: ${sqWhite};
`;
