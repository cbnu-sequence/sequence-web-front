import styled from '@emotion/styled';
import { sqBlack, sqWhite } from '../../styles/constants';

export const EmailCheckProfileBlock = styled.form`
  margin-top: 1rem;
  display: flex;

  input {
    height: 3rem;
    flex: 1;
    border: 1px solid black;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      font-size: 0.7rem;
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
