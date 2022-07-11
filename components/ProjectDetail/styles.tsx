import styled from '@emotion/styled';
import { sqBlack, sqGray, sqPink, sqWhite } from '../../styles/constants';

export const ProjectDetailBlock = styled.div`
  width: 60%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 83%;
  }

  .body {
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  .explain {
    border: 1px solid ${sqPink};
    border-top: 0;
    padding: 0 0.5rem;
    border-radius: 10px;
    position: relative;
    width: 100%;
    margin: 1rem auto 0;
    .explain__top {
      display: flex;
      justify-content: end;
      position: relative;
      margin-bottom: 2rem;
      width: 100%;
      .explain__top--topborder {
        width: 94%;
        border-top: 1px solid ${sqPink};
        @media screen and (max-width: 1350px) {
          width: 92%;
        }
        @media screen and (max-width: 1100px) {
          width: 90%;
        }
        @media screen and (max-width: 896px) {
          width: 86%;
        }
        @media screen and (max-width: 468px) {
          width: 78%;
        }
      }
    }
  }

  .explain__year {
    position: absolute;
    top: -10px;
    left: 2%;
    font-weight: 500;
    color: ${sqBlack};

    @media screen and (max-width: 1350px) {
      left: 3%;
    }
    @media screen and (max-width: 1100px) {
      left: 4%;
    }

    @media screen and (max-width: 896px) {
      left: 5%;
    }
    @media screen and (max-width: 468px) {
      left: 7%;
    }
  }

  .explain__content {
    margin: 1.3rem auto;
    width: 92%;
    font-size: 1rem;
    font-weight: 700;
    //color: #8a7ac4;
    color: black;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  .explain__participants {
    display: flex;
    margin: 1.3rem auto;
    font-weight: bold;
    font-size: 1rem;
    width: 92%;
    font-family: 'Noto Serif KR', serif;
    color: black;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
    .explain__participant {
      margin-right: 0.4rem;
    }
  }

  .explain__tags {
    display: flex;
    flex-flow: row wrap;
    width: 92%;
    margin: 1.3rem auto 1.5rem auto;
    font-family: 'Noto Serif KR', serif;
    font-weight: 600;
    font-size: 0.9rem;

    .explain__tag {
      margin-right: 1rem;
      margin-top: 0.5rem;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      padding: 0px 5px 2px 5px;
      color: ${sqBlack};
      @media screen and (max-width: 768px) {
        margin-right: 0.3rem;
        font-size: 0.6rem;
      }
    }
  }

  .explain__link {
    display: flex;
    justify-content: end;
    font-size: 2.4rem;
    position: absolute;
    right: 20px;
    bottom: -20px;
    color: ${sqPink};
    z-index: 0;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
      right: 10px;
    }
    .explain__link--githuburl {
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
    }

    .explain__link--projecturl {
      margin-left: 0.8rem;
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
    }
  }
`;
