import styled from '@emotion/styled';

export const Editor = styled.form`
  width: 70%;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0px 8px 16px 0px rgba(240, 152, 152, 0.2);
  .title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }
  hr {
    margin: 1rem;
  }
  h1 {
    font-size: 32pt;
  }

  .subtitle {
    font-size: 1.5rem;
    color: black;
    margin: 1rem 0;
    font-weight: bold;
  }
  .filetitle {
    font-size: 1.5rem;
    color: black;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
`;

export const TitleInput = styled.input`
  font-size: 1.5rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid gray;
  margin-bottom: 1rem;
  width: 100%;
  &:focus {
    border-bottom: 1px solid black;
  }
`;

export const BodyInput = styled.textarea`
  border: 1px solid black;
  min-height: 300px;
  overflow: scroll;
  width: 100%;

  @media screen and (max-width: 768px) {
    min-height: 250px;
  }
`;

export const FileInput = styled.input``;

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
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background-color: #485354;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.div`
  font-weight: bold;
  width: 50%;
  margin: 0 auto;
  color: black;
  text-align: center;
  font-size: 1.7rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
