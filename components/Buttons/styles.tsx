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
  text-align: center;
  color: ${sqBlack};
  background-color: ${sqGray};
  :hover {
    color: ${sqWhite};
    background-color: ${sqBlack};
    cursor: pointer;
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
  text-align: center;
  color: ${sqBlack};
  background-color: ${sqLightGray};
  :hover {
    color: ${sqBlack};
    background-color: ${sqGray};
    cursor: pointer;
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
  text-align: center;
  color: ${sqBlack};
  background-color: ${sqLightGray};
  :hover {
    color: ${sqBlack};
    background-color: ${sqGray};
    cursor: pointer;
  }
`;

export const ProjectAddButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.3rem;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: black;
  color: ${sqWhite};
  cursor: pointer;
`;
