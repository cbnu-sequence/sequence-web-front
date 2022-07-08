import styled from '@emotion/styled';
import { sqGray } from '../../styles/constants';

export const Block = styled.div`
  .projectdetail-bodycontainer-image {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 2rem auto 0;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .projectdetail-bodycontainer-leftIcon {
      font-size: 4rem;
      display: flex;
      align-items: center;
      color: ${sqGray};
      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }
    .projectdetail-bodycontainer-rightIcon {
      font-size: 4rem;
      display: flex;
      align-items: center;
      color: ${sqGray};
      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }
    .projectdetail-bodycontainer-img {
      width: 70%;
      margin: 1rem 0;
    }
    img {
      width: 100%;
      height: 320px;
      margin: 0 auto;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 100%;
        height: 200px;
      }
    }
  }
  .projectdetail-bodycontainer-image-page {
    text-align: center;
    font-size: 0.8rem;
  }
`;
