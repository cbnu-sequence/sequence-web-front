import styled from '@emotion/styled';
import { sqBlack, sqRed, sqWhite, sqPink, sqLightGray, sqGray } from '../../styles/constants';

export const WriteButton = styled.button`
  margin: 0 auto;
  padding: 0 auto;
  border: none;
  border-radius: 0.7rem;
  width: 4.3rem;
  height: 1.8rem;
  font-size: 1.05rem;
  text-aligin: center;
  color: ${sqBlack};
  background-color: ${sqGray};
  :hover {
    color: ${sqWhite};
    background-color: ${sqBlack};  
  }
`;

export const DeleteButton = styled.button`
  margin: 0 auto;
  padding: 0 auto;
  border: none;
  border-radius: 0.7rem;
  width: 4.3rem;
  height: 1.8rem;
  font-size: 1.1rem;
  text-aligin: center;
  color: ${sqBlack};
  background-color: ${sqLightGray};
  :hover {
    color: ${sqBlack};
    background-color: ${sqGray};
  }
`;

export const ModifyButton = styled.button`
  margin: 0 auto;
  padding: 0 auto;
  border: none;
  border-radius: 0.7rem;
  width: 4.3rem;
  height: 1.8rem;
  font-size: 1.1rem;
  text-aligin: center;
  color: ${sqBlack};
  background-color: ${sqLightGray};
  :hover {
    color: ${sqBlack};
    background-color: ${sqGray};
  }
`;