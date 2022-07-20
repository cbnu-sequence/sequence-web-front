import styled from '@emotion/styled';
import { sqPink, sqLightGray, sqGray } from './constants';

export const ProfileDiv = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px){
    height: 150px;
  }

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
    & > h2 {
      color: ${sqPink};
      font-size: 55%;
      text-align: center;
      font-family: 'Noto Serif KR', serif;
    }
  }
`;

export const ProfileMain = styled.div`
  box-shadow: 0px 8px 16px 0px rgba(240, 152, 152, 0.2);
  border-radius: 8px;
  width: 80%;
  margin: 0 auto 5rem;
  padding: 1rem 1rem;
  display: flex;
`;

export const ProfileMainMiddle = styled.div`
  border-right: 2px solid ${sqLightGray};
`;

export const CTDiv = styled.div`
  & > span {
    margin-left: 10%;
    font-size: max(1.5vw, 15px);
    font-weight: 600;
    color: ${sqGray};
  }
`;

