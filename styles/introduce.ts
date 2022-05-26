import styled from '@emotion/styled';
import { sqBlack, sqLightGray, sqRed, sqWhite, sqWhiteBoxShadow } from './constants';
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
  background-color: black;
  padding-bottom: 4rem;
`;

export const TopBlock = styled.div`
  width: 100%;
  height: 14rem;
  padding: 6rem;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${sqWhite};
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    font-size: 2.1rem;
    margin-bottom: 2rem;
  }

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
  box-shadow: ${sqWhiteBoxShadow};
  width: 70%;
  margin: 0 auto;
  padding: 3rem 3rem 1rem 3rem;
  border-radius: 30px;
  border: 1px solid ${sqWhite};
  animation: ${squareAppear} 2s ease-in 1;

  .culture_title {
    font-size: 1.9rem;
    text-align: center;
    color: ${sqWhite};
    font-weight: bold;
    margin-bottom: 1rem;
  }

  img {
    margin: 0 auto;
    width: 90%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const ColorLine = styled.div`
  width: 75%;
  border-top: 1px solid ${sqLightGray};
  margin: 4rem auto 4rem;
`;

export const SquareBlock = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 3rem 1rem 3rem 1rem;
  box-shadow: ${sqWhiteBoxShadow};
  color: ${sqWhite};
  border-radius: 30px;
  min-height: 20rem;
  animation: ${squareAppear} 2s ease-in 1;
  border: 1px solid ${sqWhite};

  @media screen and (max-width: 768px) {
    min-height: 15rem;
  }

  .title {
    font-size: 1.8rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .icons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: ${sqWhite};
    padding: 1.5rem 0 0 0;
    font-size: 5.4rem;
    margin-bottom: 1.5rem;
    @media screen and (max-width: 768px) {
      font-size: 3.5rem;
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
      font-size: 0.8rem;
    }
  }

  .lab_content {
    font-size: 1rem;
    text-align: center;
    color: ${sqWhite};
    margin-top: 2rem;
    line-height: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
  .lab_href {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.5rem;
    color: ${sqRed};
  }
`;

export const MapBlock = styled.div`
  margin-bottom: 3rem;
  box-shadow: ${sqWhiteBoxShadow};
  width: 65%;
  margin: 0 auto;
  padding: 3rem 0 3rem 0;
  border-radius: 30px;
  animation: ${squareAppear} 2s ease-in 1;
  border: 1px solid ${sqWhite};

  .map_title {
    font-size: 1.8rem;
    text-align: center;
    color: ${sqWhite};
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  .map_content {
    font-size: 1rem;
    text-align: center;
    color: ${sqWhite};
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
