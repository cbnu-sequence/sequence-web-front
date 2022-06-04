import styled from '@emotion/styled';
import { sqBlack, sqDarkGray, sqGray, sqWhite } from './constants';

export const TechcourseteamDiv = styled.div`
  width: 100%;
  margin : 0 auto;
  text-align: center;
`;

export const TCIntroductionDiv = styled.div`
  width: 70%;
  margin : 0 auto;
  text-align: center;

  .pullname {
    margin-top: 3rem;
    font-size: 1rem;
    color: ${sqGray};
  }
  .shortname {
    font-size: 3.5rem;
    font-weight: bold;
    color: ${sqBlack};
    @media screen and (max-width: 768px){
      font-size: 2.2rem;
    }   
  }
  .introduceBox {
    background-color: ${sqBlack};
    font-size: 2rem;
    color: ${sqWhite};
    padding: 2rem;
    @media screen and (max-width: 768px){
      font-size: 1.4rem;
    }   
  }
  .introduce_top {
    font-size: 2rem;
    color: ${sqWhite};
    @media screen and (max-width: 768px){
      font-size: 1.4rem;
    }   
  }

  .introduceBox2{
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
  }

  .introduce_1semester {
    font-size: 1.8rem;
    color: ${sqWhite};
    .introduce_content_1 {
      background-color: ${sqWhite};
      font-size: 1.8rem;
      color: ${sqBlack};
      padding: 1rem;
      @media screen and (max-width: 768px){
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 768px){
      font-size: 1rem;
      margin-right: 1rem;
    }
  }
  .introduce_2semester {
    font-size: 1.8rem;
    color: ${sqWhite};
    .introduce_content_2 {
      background-color: ${sqWhite};
      font-size: 1.8rem;
      color: ${sqBlack};
      padding: 1rem;
      @media screen and (max-width: 768px){
        font-size: 1rem;
      }
    }
    @media screen and (max-width: 768px){
      font-size: 1rem;
    }
  }
`;

export const TCMemberDiv = styled.div`
  width: 90%;
  margin : 5rem auto 0;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${sqDarkGray};

  @media screen and (max-width: 768px){
    font-size: 2.2rem;
  }

  .tcMemberBox {
    border-top: solid 1.5rem ${sqGray};
  }
`;

export const MembersBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;

  .item {
    font-size: 1.4rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    width: 50%;
    margin-top: 1rem;

    @media screen and (max-width: 768px){
      font-size: 0.9rem;
      width: 100%;
    }   

    .name {
      margin-right: 0.5rem;
    } 

    img{
      width: 7%;
      cursor: pointer;
      @media screen and (max-width: 768px){
        width: 8%;
      }      
    }

    .email {
      margin-left: 0.5rem;
    }
  }
`;