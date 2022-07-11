import styled from '@emotion/styled';
import { sqBlack, sqWhite, sqGray, sqLightGray, sqRed } from '../../styles/constants';

export const SecondInput = styled.input`
  font-size: 1.1rem;
  outline: none;
  border: 1px solid #beb6b6;
  border-radius: 1px;
  margin-bottom: 1rem;
  padding: 0.5rem 0 0.5rem 0.7rem;
  width: 30%;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    width: 70%;
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
  flex-flow: row wrap;
  justify-content: start;
  .per_item {
    color: ${sqBlack};
  }
  .tag_item {
    color: ${sqGray};
  }

  .per_item,
  .tag_item {
    margin: 0 0.5rem;
    width: 100%;
    cursor: pointer;
    &:hover {
      color: ${sqRed};
    }
  }
`;

export const ImageBlock = styled.div`
  width: 100%;
  font-size: 0.8rem;
  display: flex;
  margin-top: 1rem;

  label {
    margin: 0.6rem 0 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.4rem;
    height: 2.5rem;
    color: ${sqWhite};
    background-color: ${sqBlack};
    border-radius: 5px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      margin: 0.6rem 0 0 1rem;
    }
  }

  input[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;

export const PreviewImageBlock = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 2rem;

  .image {
    margin-left: 2rem;
    &:nth-of-type(1) {
      margin-left: 0;
    }
  }

  .img {
    img {
      width: 180px;
      height: 180px;
    }
  }

  .icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    &:hover {
      color: red;
    }
  }
`;
