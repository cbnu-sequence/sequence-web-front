import styled from '@emotion/styled';
import { sqBlack, sqGray, sqPink, sqWhite } from '../../styles/constants';

export const ProjectDetailBlock = styled.div`
  width: 60%;
  margin: 0 auto;

  .projectdetail-bodycontainer {
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  .projectdetail-subbodycontainer {
    border: 1px solid ${sqPink};
    border-top: 0;
    padding: 0 0.5rem;
    margin-top: 1rem;
    border-radius: 10px;
    position: relative;
    width: 100%;
    .projectdetail-subbodycontainer-top {
      display: flex;
      justify-content: end;
      position: relative;
      margin-bottom: 2rem;
      width: 100%;
      .projectdetail-subbodycontainer-topborder {
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

  .projectdetail-subbodycontainer-year {
    position: absolute;
    top: -10px;
    left: 2%;
    font-weight: 700;
    color: #0c0c0c;

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

  .projectdetail-subbodycontainer-content {
    margin: 1.3rem auto;
    width: 92%;
    font-size: 1.2rem;
    font-weight: 700;
    //color: #8a7ac4;
    color: black;
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .projectdetail-subbodycontainer-participants {
    display: flex;
    margin: 1.3rem auto;
    font-weight: bold;
    width: 92%;
    .projectdetail-subbodycontainer-participant {
      margin-left: 0.4rem;
    }
  }

  .projectdetail-subbodycontainer-tags {
    display: flex;
    flex-flow: row wrap;
    width: 92%;
    margin: 1.3rem auto 1.5rem auto;

    .projectdetail-subbodycontainer-tag {
      margin-right: 1rem;
      margin-top: 0.5rem;
      border: none;
      border-radius: 20px;
      padding: 0.4rem 0.6rem 0.4rem 0.6rem;
      background-color: Black;
      color: ${sqWhite};
      @media screen and (max-width: 768px) {
        margin-right: 0.3rem;
        padding: 0.3rem 0.4rem 0.3rem 0.4rem;
        font-size: 0.5rem;
      }
    }
  }

  .projectdetail-subbodycontainer-link {
    display: flex;
    justify-content: end;
    font-size: 2.8rem;
    position: absolute;
    right: 20px;
    bottom: -20px;
    color: ${sqPink};
    z-index: 2;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
      right: 10px;
    }
    .projectdetail-subbodycontainer-link-githuburl {
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
    }

    .projectdetail-subbodycontainer-link-projecturl {
      margin-left: 0.8rem;
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
    }
  }
`;
