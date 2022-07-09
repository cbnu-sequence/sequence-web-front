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
  & > .profile-contents {
    margin-bottom: 10px;
    display: flex;
    font-size: max(1vw, 15px);
    justify-content: center;
    flex-flow: row wrap;
    & > .flowerlogo {
      width: 30px;
    }
    &:hover {
      .flowerlogo {
        animation: shakeFlowerHead 0.6s ease-in-out infinite alternate;
      }
    }
    select{
      margin-top: 0.5rem;
      margin-left: 1rem;
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
`;


export const Example = styled.div`
  box-shadow: 0px 8px 16px 0px rgba(240, 152, 152, 0.2);
  border-radius: 8px;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;

  .left{
    margin-right: 1rem;
    width: 15%;
    text-align: center;
    .left__button--click{
      margin: 2.5rem 0;
      color: ${sqRed};
      font-size: 1rem;
      border-bottom: 1px solid red;
      &:hover{
        cursor: pointer;
      }
    }
    .left__button{
      margin: 2.5rem 0;
      color: gray;
      &:hover{
        cursor: pointer;
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
      .guest__title{
        width:20%;
        text-align: center;
      }
      .guest__content{
        width:80%;
        text-align: center;
      }
      .guest__line{
        margin: 2.5rem 0;
      }
      .guest__email--valid{
        margin: 2.5rem 0;
      }
      .guest__email--novalid{
        margin: 2.5rem 0 1rem;
        display: flex;
        justify-content:center;
        button{
          border-radius: 15px;
          padding: 0.2rem 0.4rem;
          background-color: ${sqPink};
          color: ${sqWhite};
          font-size: 0.8rem;
          outline: none;
        }

      }
    }
    .member{
      display:flex;
      .member__title{
        width:20%;
        text-align: center;
      }
      .member__content{
        width:80%;
        text-align: center;
      }
      .member__line{
        margin: 2.5rem 0;
      }
      .member__line--githubUrl,
      .member__line--otherUrl{
        margin: 2.5rem 0;
        cursor: pointer;
      }
    }
    .member-btn{
      display: flex;
      justify-content: end;
      button{
        color: ${sqPink};
        margin-left: 1rem;
      }
    }

    .admin{
      button{
        font-size: 0.9rem;
        color:${sqGray};
        background-color: ${sqWhite};
        outline: none;
        &:hover{
          color: Black;
        }
      }
      hr{
        margin: 1rem 0;
      }
      select{
        margin: 0 1rem;
      }
    }
  }
`;