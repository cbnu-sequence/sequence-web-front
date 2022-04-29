import styled from '@emotion/styled';
import { sqBlack, sqWhite, sqGray } from '../../styles/constants';

export const Block = styled.div`
  background-color: rgba(249, 237, 237, 0.042);
`;

export const Editor = styled.form`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 0.5rem;
  box-shadow: 0px 8px 16px 0px rgba(240, 152, 152, 0.2);
  border-radius: 20px;
  background-color: ${sqWhite};
  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${sqBlack};
  }
  hr {
    margin: 1rem;
  }
  h1 {
    font-size: 32pt;
  }

  .subtitle {
    font-size: 1.3rem;
    margin: 1rem 0;
    font-weight: bold;
    color: ${sqBlack};
  }
  .filetitle {
    font-size: 1.3rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: ${sqBlack};
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const TitleInput = styled.input`
  font-size: 1.3rem;
  outline: none;
  border: 1px solid ${sqGray};
  border-radius: 20px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
  &:focus {
    border: 1px solid ${sqBlack};
  }
`;

export const BodyInput = styled.textarea`
  border: 1px solid ${sqGray};
  border-radius: 20px;
  min-height: 300px;
  overflow: auto;
  width: 100%;
  outline: none;
  padding: 0.8rem;

  &:focus {
    border: 1px solid ${sqBlack};
  }

  @media screen and (max-width: 768px) {
    min-height: 250px;
  }
`;

export const FileBlock = styled.div`
  width: 30%;
  font-size: 1rem;
  display: flex;
  justify-content: center;

  div {
    border: 1px solid ${sqGray};
    border-radius: 5px;
    flex: 1;
    margin-right: 1rem;
    padding: 0.3rem;
    color: ${sqGray};
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 1rem;
    color: ${sqWhite};
    background-color: ${sqBlack};
    border-radius: 10px;
    cursor: pointer;
  }

  input[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  button + button {
    margin-left: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const WirteActionButton = styled.button`
  border: none;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.25rem 1rem;
  color: ${sqWhite};
  outline: none;
  cursor: pointer;
  background-color: ${sqBlack};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.div`
  font-weight: bold;
  width: 50%;
  margin: 0 auto;
  color: red;
  text-align: center;
  font-size: 1.3rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
