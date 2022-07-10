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
    font-size: 1.3rem;
    color: ${sqGray};
  }
  .shortname {
    font-size: 4.15rem;
    font-weight: bold;
    color: ${sqBlack};
    margin-top: -1rem;
    @media screen and (max-width: 768px){
      font-size: 2.55rem;
    }   
    @media screen and (min-width:768px) and (max-width:1700px) {
      font-size: 3.5rem;
    }
  }

  .introduceBox {
    background-color: ${sqBlack};
    border-radius: 0.8rem;
    font-size: 2rem;
    color: ${sqWhite};
    padding: 1.5rem;
    margin: 2rem 19rem;
    @media screen and (max-width: 1660px){
      font-size: 1.4rem;
      margin: 0 auto;
      margin-top: 0.8rem;
    }  
  }

  .introduce_top {
    font-size: 1.76rem;
    padding-top: 0.8rem;
    color: ${sqWhite};
    @media screen and (max-width: 768px){
      font-size: 1.2rem;
    }   
    @media screen and (min-width:768px) and (max-width:1700px) {
      font-size: 1.5rem;
    }
  }

  .introduceBox2{
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    @media screen and (max-width: 768px){
      flex-direction: column;
    }
  }

  .introduce_1semester {
    font-size: 1.5rem;
    color: ${sqWhite};
    margin-top: 1.4rem;
    .introduce_content_1 {
      background-color: ${sqWhite};
      font-size: 1.4rem;
      color: ${sqBlack};
      padding: 1.7rem 2.1rem;
      font-weight: bold;
      border-radius: 0.4rem;
      @media screen and (max-width: 768px){
        font-size: 1rem;
      }
      @media screen and (min-width:768px) and (max-width:1100px) {
        font-size:1.2rem;
      }
      @media screen and (min-width:1100px) and (max-width:1700px) {
        font-size: 1.3rem;
      }
    }
    @media screen and (max-width: 768px){
      font-size: 1.1rem;
    }
    @media screen and (min-width:768px) and (max-width:1100px) {
      font-size:1.3rem;
    }
  }

  .introduce_2semester {
    font-size: 1.5rem;
    color: ${sqWhite};
    margin-top: 1.4rem;
    .introduce_content_2 {
      background-color: ${sqWhite};
      font-size: 1.4rem;
      color: ${sqBlack};
      padding: 1.7rem 2.1rem;
      font-weight: bold;
      border-radius: 0.4rem;
      @media screen and (max-width: 768px){
        font-size: 1rem;
      }
      @media screen and (min-width:768px) and (max-width:1100px) {
        font-size:1.2rem;
      }
      @media screen and (min-width:1100px) and (max-width:1700px) {
        font-size: 1.3rem;
      }
    }
    @media screen and (max-width: 768px){
      font-size: 1.1rem;
    }
    @media screen and (min-width:768px) and (max-width:1100px) {
      font-size:1.3rem;
    }
  }
`;

export const TCMemberDiv = styled.div`
  width: 90%;
  margin : 8rem auto 0;
  text-align: center;
  font-size: 3.1rem;
  font-weight: bold;
  color: ${sqDarkGray};

  @media screen and (max-width: 768px){
    font-size: 2.2rem;
  }

  .tcMemberBox {
    margin:0.5rem 4.3rem;
    border-top: solid 0.6rem ${sqGray};
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