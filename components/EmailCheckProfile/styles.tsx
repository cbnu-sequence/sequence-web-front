import styled from '@emotion/styled';
import { sqBlack, sqWhite } from '../../styles/constants';

export const EmailCheckProfileBlock = styled.form`
  margin: 1rem 0 1rem 2.5rem;
  display: flex;
  justify-content: center;

  input {
    font-size: 0.5rem;
    border: 1px solid black;
    padding: 0.2rem;
    width: 35%;
    &::placeholder {
      font-size: 0.7rem;
      text-align: center;
    }
  }

  button {
    font-size: 0.7rem;
    margin-left: 1rem;
    border: none;
    background-color: ${sqBlack};
    border-radius: 5px;
    color: ${sqWhite};
    padding: 0.5rem 0.8rem;
  }
`;
