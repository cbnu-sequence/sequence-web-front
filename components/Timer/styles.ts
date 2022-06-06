import styled from '@emotion/styled';
import { PpomoBoxShadow, sqDarkGreen, sqDeepDarkGreen } from '../../styles/constants';
export const TimerDiv = styled.div`
  display: flex;
  height: 15rem;
  font-size: 7rem;
  justify-content: center;
  align-items: flex-end;
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
    box-shadow: ${PpomoBoxShadow}
    border-radius: 25px;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 0.5rem;

    .units{
      font-size: 16px;
      font-weight: 100;
      margin-bottom: 25px;

    }
  }
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
    & > div {
      width: 6rem;
      height: 7.5rem;
      margin-right: 8px;
     margin-left: 8px;
     .units{
      font-size: 11px;
      margin-bottom: 15px;


    }
    }
  }
`;
