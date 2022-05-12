import styled from '@emotion/styled';
import { sqBlack, sqLightGray, sqRed, sqWhite } from '../../styles/constants';
import { keyframes } from '@emotion/react';

const squareAppear = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

export const IntroduceBlock = styled.div`
  padding-top: 60px;
  background-color: ${sqWhite};
  padding-bottom: 4rem;
`;

export const TopBlock = styled.div`
  width: 100%;
  height: 14rem;
  padding: 6rem;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${sqBlack};
  margin-bottom: 5rem;

  @keyframes textAppear {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  .top1 {
    animation: textAppear 1.5s ease-in 1;
  }

  .top2 {
    animation: textAppear 1.5s ease-in 1;
    font-size: 1rem;
  }
`;

export const CultureBlock = styled.div`
  box-shadow: 0px 12px 20px 0px rgba(77, 73, 73, 0.2);
  width: 70%;
  margin: 0 auto;
  padding: 3rem 0 3rem 0;
  border-radius: 30px;
  animation: ${squareAppear} 2s ease-in 1;

  .txt_color {
    color: ${sqRed};
  }

  .culture_title {
    font-size: 1.8rem;
    text-align: center;
    color: ${sqBlack};
    font-weight: bold;
    font-family: Georgia, sans-serif;
    margin-bottom: 1rem;
  }

  .culture_content {
    font-size: 1.2rem;
    padding-top: 0.5rem;
    text-align: center;
    font-weight: bold;
    list-style: none;
    color: ${sqBlack};
    & > li {
      padding-top: 1.5rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

export const MiddleBlock = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 1rem 0 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  .title {
    font-size: 1.8rem;
    text-align: center;
    font-weight: bold;
    font-family: Georgia, sans-serif;
  }

  .icons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: ${sqBlack};
    padding: 1.5rem 0 0 0;
    font-size: 5.4rem;
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }

  .icons_name {
    display: flex;
    font-weight: bold;
    font-size: 1.2rem;
    width: 100%;
    margin: 0 auto;

    & > p {
      width: 33.333%;
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      font-size: 0.7rem;
    }
  }

  .lab_content {
    font-size: 1rem;
    text-align: center;
    color: ${sqBlack};
  }
`;

export const ColorLine = styled.div`
  width: 80%;
  border-top: 4px solid ${sqLightGray};
  margin: 4rem auto 4rem;
`;

export const SquareBlock = styled.div`
  width: 45%;
  padding: 1rem 1rem 1rem 1rem;
  box-shadow: 0px 12px 20px 0px rgba(77, 73, 73, 0.2);
  color: ${sqBlack};
  border-radius: 30px;
  min-height: 20rem;
  line-height: 6rem;
  animation: ${squareAppear} 2s ease-in 1;

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
    width: 100%;
  }
`;

export const MapBlock = styled.div`
  margin-bottom: 3rem;
  box-shadow: 0px 12px 20px 0px rgba(77, 73, 73, 0.2);
  width: 65%;
  margin: 0 auto;
  padding: 3rem 0 3rem 0;
  border-radius: 30px;
  animation: ${squareAppear} 2s ease-in 1;

  .map_title {
    font-size: 1.8rem;
    text-align: center;
    color: ${sqBlack};
    font-weight: bold;
    font-family: Georgia, sans-serif;
    margin-bottom: 1.5rem;
  }
  .map_content {
    font-size: 1rem;
    text-align: center;
    color: ${sqBlack};
    margin-bottom: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
  #map {
    width: 90%;
    height: 380px;
    margin: 0 auto;
  }
`;
