import styled from '@emotion/styled';
import { sqPink, sqWhite, sqWhiteBoxShadow } from './constants';

export const ProjectTeamBlock = styled.div`
  padding: 2rem 0;
  background-color: black;
  color: ${sqWhite};

  .toptitle {
    text-align:center;
    font-size: 2rem;
    font-weight: bold;
    @media screen and (max-width: 768px){
      font-size: 1.5rem;
    }
  }

  .secondtitle{
    width: 90%;
    font-size: 2rem;
    color: ${sqWhite};
    margin-left: 5rem;
    @media screen and (max-width: 768px){
      font-size: 1rem;
      margin-left: 3rem;
    }
  }
`;

export const TopSquareBlock = styled.div`
  display:flex;
  justify-content: space-around;
  margin-top: 4rem;

  .top_square{
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 700;
    &:hover{
      transform: translateY(-5px);
      transition: ease-in-out 0.2s;
    }

    @media screen and (max-width: 768px){
      font-size: 1rem;
    }
  }
`;

export const ColorLine = styled.div`
  border-top: 1px solid gray;
  width: 93%;
  margin: 0 auto;
  @media screen and (max-width: 768px){
    width: 80%;
  }
`;

export const FrontEndBlock = styled.div`
  margin-top: 7rem;

  @media screen and (max-width: 768px){
    margin-top: 4rem;
    }

  .content{
    margin: 2rem 0 0 5rem;
    @media screen and (max-width: 768px){
      font-size: 0.8rem;
      margin: 1rem 0 0 3rem;
    }
  }
`;

export const BackendBlock = styled.div`
  margin-top: 3rem;
`;

export const DevOpsBlock = styled.div`
  margin-top: 3rem;
`;

export const IosBlock = styled.div`
  margin-top: 3rem;
`;

