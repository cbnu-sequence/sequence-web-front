import { sqBlack, sqRed, sqWhite, sqPink, sqLightGray, sqGray } from '../../styles/constants';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Link from 'next/link';

export const ProjectDiv = styled.div`
  height: 300px;
  width: 70%;
  margin-left: 10px;

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
    max-width: 85%;
    padding-top: 30%;
  }
`;
