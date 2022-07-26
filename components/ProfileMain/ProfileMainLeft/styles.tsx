import styled from '@emotion/styled';
import { sqRed } from '../../../styles/constants';

export const ProfileMainLeftBlock = styled.div`
  margin-right: 1rem;
  width: 15%;
  text-align: center;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  .click {
    width: 100%;
    margin: 2.5rem auto 0;
    color: ${sqRed};
    @media screen and (max-width: 768px) {
      margin: 2rem auto 0;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .no-click {
    width: 100%;
    margin: 2.5rem auto;
    color: gray;
    @media screen and (max-width: 768px) {
      margin: 2rem auto;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .btnline {
    width: 25%;
    border-top: 1px solid ${sqRed};
    margin: 0 auto 2.5rem;
    @media screen and (max-width: 768px) {
      width: 60%;
      margin: 0 auto 2rem;
    }
  }
`;
