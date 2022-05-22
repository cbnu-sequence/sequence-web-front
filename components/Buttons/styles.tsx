import styled from '@emotion/styled';
import { sqBlack, sqWhite, sqLightGray, sqGray } from '../../styles/constants';

export const WriteButton = styled.button`
  margin: 0 auto;
  border: none;
  border-radius: 0.3rem;
  width: 4.25rem;
  height: 2.05rem;
  font-size: 0.8rem;
  text-align: center;
  color: ${sqWhite};
  background-color: ${sqBlack};
  &:hover {
    color: ${sqBlack};
    background-color: ${sqGray};  
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
  color: ${sqBlack};
  background-color: ${sqGray};
  &:hover {
    color: ${sqBlack};
    background-color: ${sqLightGray};
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
  color: ${sqBlack};
  background-color: ${sqGray};
  &:hover {
    color: ${sqBlack};
    background-color: ${sqLightGray};
    cursor: pointer
  }
`;