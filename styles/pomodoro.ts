import styled from '@emotion/styled';
import { sqDarkGreen, sqRed, sqWhite, sqBlack } from '../styles/constants';

export const PomodoroBlock = styled.div`
  padding: 15vw 25px 0 25px;
  position: absolute;
  background-color: ${sqDarkGreen};
  width: 100%;
  height: 150%;

  & > p {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    top: 40px;
    color: white;
    font-size: max(14vw, 150px);

    text-align: center;
    font-weight: 900;
    font-family: 'Noto Serif KR', serif;
    opacity: 0.03;
  }
  @media screen and (max-width: 768px) {
    padding: 0 25px 0 25px;

    & > p {
      top: 90px;
      font-size: 20vw;
    }
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
