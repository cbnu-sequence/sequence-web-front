import styled from '@emotion/styled';
import { PpomoBoxShadow, sqDarkGreen, sqDeepDarkGreen } from '../../styles/constants';
export const TimerDiv = styled.div`
  display: flex;
  height: 15rem;
  font-size: 8rem;
  justify-content: center;
  align-items: flex-end;
  & > div {
    display: flex;
    justify-content: center;
    width: 13rem;
    height: 15rem;
    color: white;
    background-color: ${sqDeepDarkGreen};
    box-shadow: ${PpomoBoxShadow}
    border-radius: 25px;
    margin-right: 30px;
    margin-bottom: 2rem;
  }
`;
