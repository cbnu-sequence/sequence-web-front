import styled from '@emotion/styled';

export const ProjectImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const ProjectImgDiv = styled.div`
  width: 25vw;
  height: 18vw;
  padding-top: 3vw;
  @media screen and (max-width: 768px) {
    height: 12rem;
    width: 100%;
  }
`;
