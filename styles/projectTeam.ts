import styled from '@emotion/styled';
import { sqPink, sqWhite, sqWhiteBoxShadow, sqDarkGray } from './constants';

export const ProjectTeamBlock = styled.div`
  padding: 2rem 0;
  background-color: black;
  color: ${sqWhite};

  .toptitle {
    text-align: center;
    font-size: 3.1rem;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .secondtitle {
    font-size: 2rem;
    color: ${sqWhite};
    margin-left: 5rem;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
      margin-left: 3rem;
    }
  }
`;

export const TopSquareBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5.2rem;
  margin-bottom: 0.9rem;
  padding: 0rem 1.8rem;

  .top_square {
    font-size: 1.8rem;
    cursor: pointer;
    font-weight: 700;
    &:hover {
      transform: translateY(-5px);
      transition: ease-in-out 0.2s;
      text-shadow: 0rem 0.218rem ${sqDarkGray};
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const MembersBlock = styled.div`
  padding-top: 7rem;

  @media screen and (max-width: 768px) {
    padding-top: 5rem;
  }
`;

export const ContentBlock = styled.div`
  margin: 1rem 0 0 5rem;
  font-size: 1.4rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    margin: 1rem 0 0 3rem;
  }

  .item_top {
    display: flex;
    margin-top: 1rem;

    .name {
      margin-right: 0.8rem;
    }
    img {
      width: 3%;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 5%;
      }
    }
    .email {
      margin-left: 0.8rem;
    }
  }

  .item_bottom {
  }
`;

export const ColorLine = styled.div`
  border-top: 6px solid gray;
  margin: 0.5rem 4.3rem;
  @media screen and (max-width: 768px) {
    margin: 0 2.5rem;
  }
`;
