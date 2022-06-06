import styled from '@emotion/styled';
import { sqWhite } from '../../styles/constants';

export const MyPomoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  color: ${sqWhite};
  & > h2 {
    font-size: 1.5rem;
    font-weight: 800;
  }
  & > ul {
    list-style: none;
    font-size: 1.2rem;
  }
`;
