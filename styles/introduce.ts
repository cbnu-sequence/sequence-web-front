import styled from '@emotion/styled';
import { sqBlack, sqDeepLightGray, sqLightGray, sqRed, sqWhite, sqWhiteBoxShadow } from './constants';
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
  padding: 6rem;
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
  animation: textAppear 1.5s ease-in 1;

  @media screen and (max-width: 768px) {
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

  & > img {
    width: 50vw;
    min-width: 350px;

    @media screen and (max-width: 415px) {
      min-width: 260px;
    }
  }
`;

export const CultureBlock = styled.div`
  box-shadow: ${sqWhiteBoxShadow};
  width: 90%;
  margin: 0 auto;
  animation: ${squareAppear} 2s ease-in 1;

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 1rem;
  }

  .culture_title {
    font-size: 1.7rem;
    text-align: center;
    color: ${sqWhite};
    font-weight: 500;
    margin-bottom: 1rem;
    &:before {
      text-align: center;
      content: '';
      display: block;
      width: 45px;
      border-bottom: 7px solid ${sqRed};
      margin: 0 auto;
    }
  }

  img {
    margin: 0 auto;
    width: 70%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const ColorLine = styled.div`
  width: 75%;
  border-top: 1px solid ${sqLightGray};
  margin: 4rem auto 4rem;
  @media screen and (max-width: 768px) {
    margin: 2rem auto;
  }
`;

export const SquareBlock = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 3rem 1rem 3rem 1rem;
  color: ${sqWhite};
  min-height: 20rem;
  animation: ${squareAppear} 2s ease-in 1;

  @media screen and (max-width: 768px) {
    min-height: 15rem;
    width: 90%;
    padding: 1rem;
  }

  .title {
    font-size: 1.7rem;
    text-align: center;
    font-weight: 500;
    margin-bottom: 3rem;
    &:before {
      text-align: center;
      content: '';
      display: block;
      width: 75px;
      border-bottom: 7px solid ${sqRed};
      margin: 0 auto;
    }
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
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    color: ${sqWhite};
    margin-top: 2rem;
    margin-left: 20px;
    line-height: 2rem;
    padding: 0 2rem;

    .lab_content__left {
      & > img {
        margin-left: 40px;
      }
      .text {
        font-size: 0.5vw;
        position: absolute;
        line-height: 18px;
      }

      .big-p {
        font-size: max(2vw, 20px);
        z-index: 0.5;
      }
      .small-p {
        font-size: max(1vw, 14px);
        z-index: 0.5;
      }
      .professor {
        margin: -60px 0 25px 210px;
      }
    }
    .lab_content__right {
      margin-top: 90px;
      margin-left: 80px;
      font-size: min(3.5vw, 2.7rem);

      & > ul {
        margin-top: 50px;
        font-size: 1.7vw;
        & > li {
          margin-bottom: 25px;
        }
      }
    }

    @media screen and (max-width: 1088px) {
      flex-direction: column;
      margin-left: 0px;
      padding: 0;

      .lab_content__left {
        & > img {
          margin-left: 0px;
        }
        .professor {
          margin: 5px 0 0 100px;
        }
      }

      .text {
        display: none;
      }

      .lab_content__right {
        text-align: center;
        margin-top: 50px;
        margin-left: 0px;
        font-size: 25px;

        & > ul {
          text-align: start;
          margin-top: 30px;
          font-size: 15px;
          & > li {
            margin-bottom: 15px;
          }
        }
      }
    }
  }
  .lab-btn {
    width: 100%;
    margin-top: 80px;
    text-align: center;
    .lab_href {
      background-color: ${sqWhite};
      padding: 5px 20px;
      border-radius: 30px;
      border: 5px outset ${sqRed};
      text-align: center;
      margin-top: 2rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: ${sqBlack};
      transition: color 0.2s ease-out;

      &:hover {
        color: ${sqRed};
      }
    }
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

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 1rem 0;
  }

  .map_title {
    font-size: 1.9rem;
    text-align: center;
    color: ${sqWhite};
    font-weight: 500;
    margin-bottom: 1.5rem;
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
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
