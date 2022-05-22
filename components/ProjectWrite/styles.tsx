import styled from '@emotion/styled';
import { sqBlack, sqWhite, sqGray, sqLightGray, sqRed } from '../../styles/constants';

export const SecondInput = styled.input`
  font-size: 1.1rem;
  outline: none;
  border: 1px solid #beb6b6;
  border-radius: 1px;
  margin-bottom: 1rem;
  padding: 0.5rem 0 0.5rem 0.7rem;
  width: 25%;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    width: 80%;
  }
`;

export const AddButton = styled.button`
  background-color: ${sqBlack};
  color: ${sqWhite};
  padding: 0.7rem;
  margin-left: 1rem;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const ItemBlock = styled.div`
  display: flex;
  font-weight: bold;
  .per_item {
    color: ${sqBlack};
  }
  .tag_item {
    color: ${sqGray};
  }

  .per_item,
  .tag_item {
    margin: 0 0.5rem;
    cursor: pointer;
    &:hover {
      color: ${sqRed};
    }
  }
`;
