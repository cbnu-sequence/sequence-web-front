import styled from '@emotion/styled';
import { sqBlack, sqPink, sqLightGray, sqRed, sqWhite, sqGray } from './constants';

export const ProfileDiv = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @keyframes shakeFlowerHead {
    0% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }

  & > .profile-title {
    font-size: min(5vw, 40px);
    margin-bottom: 40px;
    & > h2 {
      color: ${sqPink};
      font-size: 55%;
      text-align: center;
      font-family: 'Noto Serif KR', serif;
    }
  }
  & > .profile-contents {
    margin-bottom: 10px;
    display: flex;
    font-size: max(1vw, 15px);
    justify-content: center;
    flex-flow: row wrap;
    & > .flowerlogo {
      width: 30px;
    }
    &:hover {
      .flowerlogo {
        animation: shakeFlowerHead 0.6s ease-in-out infinite alternate;
      }
    }
    select{
      margin-top: 0.5rem;
      margin-left: 1rem;
    } 
  }
`;

export const AddButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.3rem;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: black;
  color: ${sqWhite};
  cursor: pointer;
  margin: 0.5rem 0.5rem 0 0.5rem;
`;

export const CTDiv = styled.div`
  & > span {
    margin-left: 10%;
    font-size: max(1.5vw, 15px);
    font-weight: 600;
    color: ${sqGray};
  }
`;

export const EditInput = styled.input`
  border: 1px solid black;
  margin-left: 1rem;
  padding: 0.2rem;
  font-size: 0.8rem;
`;
