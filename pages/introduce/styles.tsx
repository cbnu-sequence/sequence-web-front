import styled from '@emotion/styled';
import { sqBlack, sqLightGray, sqWhite } from '../../styles/constants';

export const IntroduceBlock = styled.div`
  padding-top: 60px;
  background-color: black;
  padding-bottom: 2rem;
`;

export const TopBlock = styled.div`
  width: 100%;
  height: 18rem;
  padding: 6rem;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${sqWhite};

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

export const MainBlock = styled.div`
  padding: 0;
`;

export const SquareBlock = styled.div`
  width: 60%;
  margin: 2rem auto 6rem;
  padding: 2rem 2rem 2rem 2rem;
  box-shadow: 0px 12px 20px 0px rgba(77, 73, 73, 0.2);
  background-color: black;
  color: ${sqWhite};
  border-radius: 30px;
  border: 1px solid white;

  @keyframes sqAppear {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: sqAppear 2s ease-in 1;

  .title {
    font-size: 1.8rem;
    text-align: center;
    font-weight: bold;
    font-family: Georgia, sans-serif;
  }

  .culture_content {
    font-size: 1.1rem;
    padding-top: 0.5rem;
    text-align: center;
    font-weight: bold;
    list-style: none;
    color: #f8f8f8;
    & > li {
      padding-top: 1.5rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  .icons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: white;
    padding: 4rem 0 2rem 0;
    font-size: 4.5rem;
  }

  .icons_name {
    display: flex;
    font-weight: bold;
    font-size: 1.1rem;
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
`;

export const MapBlock = styled.div`
  margin-bottom: 3rem;

  .map_title {
    font-size: 1.8rem;
    text-align: center;
    color: ${sqWhite};
    font-weight: bold;
    font-family: Georgia, sans-serif;
    margin-bottom: 1rem;
  }
  .map_content {
    font-size: 1rem;
    text-align: center;
    color: ${sqWhite};
    margin-bottom: 1rem;
  }
  #map {
    width: 60%;
    height: 580px;
    margin: 0 auto;
  }
`;
