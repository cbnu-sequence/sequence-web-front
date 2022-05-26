import { sqBlack, sqRed, sqWhite, sqPink, sqLightGray, sqGray } from '../../styles/constants';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Link from 'next/link';

export const Projects = styled.div`
  height: 300px;
  width: 70%;

  .center {
    transition: all 0.3s ease;
  }
  .slick-center {
    transform: scale(1.1);
  }
  .project {
    position: relative;
    margin: 30px 0 30px 0;
    border-radius: 10px;
    background-color: gray;
    max-width: 85%;
    padding-top: 75%;
  }
`;
