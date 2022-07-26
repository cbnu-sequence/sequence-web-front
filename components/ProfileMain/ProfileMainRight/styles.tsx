import styled from '@emotion/styled';
import { sqGray, sqPink, sqWhite } from '../../../styles/constants';

export const ProfileMainRightBlock = styled.div`
  margin-left: 1rem;
  width: 100%;
  .guest {
    display: flex;
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
    }
    & > .title {
      width: 20%;
      text-align: center;
      @media screen and (max-width: 768px) {
        width: 30%;
      }
    }
    & > .content {
      width: 80%;
      text-align: center;
      @media screen and (max-width: 768px) {
        width: 70%;
      }
    }
    .line {
      margin: 2.5rem 0;
      @media screen and (max-width: 768px) {
        margin: 2rem 0;
      }
    }
    .valid {
      margin: 2.5rem 0;
      @media screen and (max-width: 768px) {
        margin: 2rem 0;
      }
    }
    .novalid {
      margin: 2.5rem 0 1rem;
      display: flex;
      justify-content: center;
      @media screen and (max-width: 768px) {
        margin: 2rem 0 1rem;
      }
      button {
        border-radius: 15px;
        padding: 0.2rem 0.4rem;
        background-color: ${sqPink};
        color: ${sqWhite};
        font-size: 0.8rem;
        outline: none;
        @media screen and (max-width: 768px) {
          font-size: 0.5rem;
          padding: 0.1rem 0.3rem;
        }
      }
    }
  }
  .member {
    display: flex;
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
    }
    & > .title {
      width: 20%;
      text-align: center;
      @media screen and (max-width: 768px) {
        width: 30%;
      }
    }
    & > .content {
      width: 80%;
      text-align: center;
      @media screen and (max-width: 768px) {
        width: 70%;
      }
    }
    .line {
      margin: 2.5rem 0;
      @media screen and (max-width: 768px) {
        margin: 2rem 0;
      }
    }
    .line__githubUrl,
    .line__otherUrl {
      margin: 2.5rem 0;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        margin: 2rem 0;
      }
    }
  }
  .member__btn {
    display: flex;
    justify-content: end;
    button {
      color: ${sqPink};
      margin-left: 1rem;
      font-size: 1rem;
      @media screen and (max-width: 768px) {
        font-size: 0.7rem;
      }
    }
  }

  .admin {
    button {
      font-size: 0.9rem;
      color: ${sqGray};
      background-color: ${sqWhite};
      outline: none;
      @media screen and (max-width: 768px) {
        font-size: 0.6rem;
      }
      &:hover {
        color: Black;
      }
    }

    & > button {
      margin: 2rem 0;
    }

    .memberbtn__click {
      button {
        margin: 1rem 0 0;
      }
      .memberemail {
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        @media screen and (max-width: 768px) {
          margin: 1rem 0 0.5rem;
        }
        input {
          width: 30%;
          @media screen and (max-width: 768px) {
            width: 70%;
          }
          &::placeholder {
            text-align: center;
          }
        }
      }
      .memberselect {
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        @media screen and (max-width: 768px) {
          margin: 0.5rem 0 0.7rem;
        }
        select {
          margin: 0 0.5rem;
          font-size: 0.9rem;
          text-align: center;
          @media screen and (max-width: 768px) {
            font-size: 0.6rem;
          }
        }
      }
      .memberchangebtn {
        width: 97%;
        display: flex;
        justify-content: end;
        button {
          margin: 0rem 0.5rem 1rem;
          @media screen and (max-width: 768px) {
            margin: 0.7rem 0.3rem 0.5rem;
          }
        }
      }
    }
  }
`;

export const AddButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.3rem;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: black;
  color: ${sqWhite};
  cursor: pointer;
  margin: 0.5rem 0.5rem 0 0.5rem;
`;

export const EditInput = styled.input`
  border: 1px solid black;
  padding: 0.3rem 0.3rem 0.3rem 0.5rem;
  font-size: 0.8rem;
  width: 50%;
  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    padding: 0.2rem 0.2rem 0.2rem 0.4rem;
    width: 60%;
  }
`;
