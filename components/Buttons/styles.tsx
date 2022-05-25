import styled from '@emotion/styled';
import { sqBlack, sqWhite, sqDeepDarkGray, sqDarkGray } from '../../styles/constants';

export const WriteBtnBlock = styled.div`
  width: 90%;
  display: flex;
  justify-content: end;
`;

export const WriteButton = styled.button`
  padding: 0 auto;
  border: none;
  border-radius: 0.3rem;
  width: 4.25rem;
  height: 2.05rem;
  font-size: 0.88rem;
  text-align: center;
  color: ${sqWhite};
  background-color: ${sqBlack};
  &:hover {
    color: ${sqWhite};
    background-color: ${sqDeepDarkGray};  
    cursor: pointer
  }
  `;
  
export const DeleteButton = styled.button`
  margin: 0 auto;
  padding: 0 auto;
  border: none;
  border-radius: 0.3rem;
  width: 4.25rem;
  height: 2.05rem;
  font-size: 0.9rem;
  text-align: center;
  color: ${sqWhite};
  background-color: ${sqDeepDarkGray};
  &:hover {
    color: ${sqWhite};
    background-color: ${sqDarkGray};  
    cursor: pointer
  }
`;

export const ModifyButton = styled.button`
  margin: 0 auto;
  padding: 0 auto;
  border: none;
  border-radius: 0.3rem;
  width: 4.25rem;
  height: 2.05rem;
  font-size: 0.9rem;
  text-align: center;
  color: ${sqWhite};
  background-color: ${sqDeepDarkGray};
  &:hover {
    color: ${sqWhite};
    background-color: ${sqDarkGray};  
    cursor: pointer
  }
`;