import styled from '@emotion/styled';
import { sqBlack, sqPink, sqLightGray, sqRed, sqWhite, sqGray } from './constants';

export const ProfileDiv = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px){
    height: 150px;
  }

  @keyframes shakeFlowerHead {
    0% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }

  & > .profile-title {
    font-size: min(5vw, 40px);
    & > h2 {
      color: ${sqPink};
      font-size: 55%;
      text-align: center;
      font-family: 'Noto Serif KR', serif;
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

export const CTDiv = styled.div`
  & > span {
    margin-left: 10%;
    font-size: max(1.5vw, 15px);
    font-weight: 600;
    color: ${sqGray};
  }
`;

export const EditInput = styled.input`
  border: 1px solid black;
  padding: 0.3rem 0.3rem 0.3rem 0.5rem;
  font-size: 0.8rem;
  width: 50%;
  @media screen and (max-width: 768px){
    font-size: 0.6rem;
    padding: 0.2rem 0.2rem 0.2rem 0.4rem;
    width: 60%;
  }
`;


export const Example = styled.div`
  box-shadow: 0px 8px 16px 0px rgba(240, 152, 152, 0.2);
  border-radius: 8px;
  width: 80%;
  margin: 0 auto 5rem;
  padding: 1rem 1rem;
  display: flex;

  .left{
    margin-right: 1rem;
    width: 15%;
    text-align: center;
    font-size: 1rem;
    @media screen and (max-width: 768px){
      font-size: 0.7rem;
    }
    .left__button--click{
      width:100%;
      margin: 2.5rem auto 0;
      color: ${sqRed};
      @media screen and (max-width: 768px){
        margin: 2rem auto 0;
      }
      &:hover{
        cursor: pointer;
      }
    }
    .left__button{
      width:100%;
      margin: 2.5rem auto;
      color: gray;
      @media screen and (max-width: 768px){
        margin: 2rem auto;
      }
      &:hover{
        cursor: pointer;
      }
    }
    .left__line--color{
      width:25%;
      border-top: 1px solid ${sqRed};
      margin: 0 auto 2.5rem;
      @media screen and (max-width: 768px){
        width:60%;
        margin: 0 auto 2rem;
      }
    }
  }

  .middle{
    border-right: 2px solid ${sqLightGray};
  }

  .right{
    margin-left: 1rem;
    width:100%;
    .guest{
      display:flex;
      font-size:1rem;
      @media screen and (max-width: 768px){
        font-size:0.6rem;
      }
      .guest__title{
        width:20%;
        text-align: center;
        @media screen and (max-width: 768px){
          width:30%;
        }
      }
      .guest__content{
        width:80%;
        text-align: center;
        @media screen and (max-width: 768px){
          width:70%;
        }
      }
      .guest__line{
        margin: 2.5rem 0;
        @media screen and (max-width: 768px){
          margin: 2rem 0;
        }
      }
      .guest__email--valid{
        margin: 2.5rem 0;
        @media screen and (max-width: 768px){
          margin: 2rem 0;
        }
      }
      .guest__email--novalid{
        margin: 2.5rem 0 1rem;
        display: flex;
        justify-content:center;
        @media screen and (max-width: 768px){
          margin: 2rem 0 1rem;
        }
        button{
          border-radius: 15px;
          padding: 0.2rem 0.4rem;
          background-color: ${sqPink};
          color: ${sqWhite};
          font-size: 0.8rem;
          outline: none;
          @media screen and (max-width: 768px){
            font-size: 0.5rem;
            padding: 0.1rem 0.3rem;
          }
        }

      }
    }
    .member{
      display:flex;
      font-size:1rem;
      @media screen and (max-width: 768px){
        font-size:0.6rem;
      }
      .member__title{
        width:20%;
        text-align: center;
        @media screen and (max-width: 768px){
          width:30%;
        }
      }
      .member__content{
        width:80%;
        text-align: center;
        @media screen and (max-width: 768px){
          width:70%;
        }
      }
      .member__line{
        margin: 2.5rem 0;
        @media screen and (max-width: 768px){
          margin: 2rem 0;
        }
      }
      .member__line--githubUrl,
      .member__line--otherUrl{
        margin: 2.5rem 0;
        cursor: pointer;
        @media screen and (max-width: 768px){
          margin: 2rem 0;
        }
      }
    }
    .member-btn{
      display: flex;
      justify-content: end;
      button{
        color: ${sqPink};
        margin-left: 1rem;
        font-size:1rem;
        @media screen and (max-width: 768px){
          font-size:0.7rem;
        }
      }
    }

    .admin{
      button{
        font-size: 0.9rem;
        color:${sqGray};
        background-color: ${sqWhite};
        outline: none;
        @media screen and (max-width: 768px){
          font-size:0.6rem;
        }
        &:hover{
          color: Black;
        }
      }

      & > button{
        margin: 2rem 0;
      }

      .admin__memberbtn--click{
        button{
          margin: 1rem 0 0;
        }
        .admin__memberemail{
          display: flex;
          justify-content: center;
          margin: 1rem 0;
          @media screen and (max-width: 768px){
            margin: 1rem 0 0.5rem;
          }
          input{
            width:30%;
            @media screen and (max-width: 768px){
              width:70%;
            }
            &::placeholder{
              text-align: center;
            }
          }
        }
        .admin__memberselect{
          display:flex;
          justify-content: center;
          margin: 1rem 0;
          @media screen and (max-width: 768px){
            margin: 0.5rem 0 0.7rem;
          }
          select{
            margin: 0 0.5rem;
            font-size:0.9rem;
            text-align: center;
            @media screen and (max-width: 768px){
              font-size:0.6rem;
            }
          }
        }
        .admin__memberchangebtn{
          width:97%;
          display:flex;
          justify-content: end;
          button{
            margin: 0rem 0.5rem 1rem;
            @media screen and (max-width: 768px){
              margin: 0.7rem 0.3rem 0.5rem;
            }
          }
        }
      }
    }
  }
`;