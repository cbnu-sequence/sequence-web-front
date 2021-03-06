import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { sqBlack, sqRed, sqWhite } from './constants';

type ButtonType = {
  disabled?: boolean;
};

export const Header = styled.header`
  justify-content: center;
  display: flex;
  margin-top: 3%;
  margin-bottom: 40px;

  & > img {
    width: 70%;
    max-width: 300px;
    cursor: pointer;
  }
`;
export const EmailHeader = styled.header`
  justify-content: center;
  display: flex;
  margin-top: 150px;
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: bolder;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 75%;
  max-width: 400px;
`;

export const Label = styled.label`
  margin-bottom: 16px;

  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 12px;
  line-height: 1.33333333;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 3px -3px 5px rgba(223, 223, 223, 0.7);
    border: none;
    background-color: #ffffff;
    ::placeholder {
      color: #ffffff;
    }
  }
  &:hover {
    background-color: rgba(223, 223, 223, 2%);
    border: 1px solid var(--saf-0);
  }
`;

export const Button = styled.button<ButtonType>`
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: ${sqBlack};
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${sqRed};
    transition: all ease 0.2s 0.1s;
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }

  ${(props) =>
    props.disabled &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${sqWhite};

      &:hover {
        background-color: ${sqBlack};
        transition: 0;
        cursor: default;
      }

      @keyframes spin {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .spinner {
        border-top: 2px solid ${sqWhite};
        border-bottom: 2px solid ${sqWhite};
        border-radius: 50%;
        animation: spin 2s linear infinite;
        width: 27px;
        height: 27px;
        margin-left: 10px;
      }
    `}
`;

export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;

export const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
`;

export const LinkContainer = styled.p`
  font-size: 13px;
  color: #616061;
  width: 100%;

  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const exampleDiv = styled.div`
  color: red;
`;
