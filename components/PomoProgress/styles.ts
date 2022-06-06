import styled from '@emotion/styled';
import { sqWhite } from '../../styles/constants';

export const ProgressDiv = styled.div`
  color: ${sqWhite};
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: 100px;
  font-size: 20px;
  & > p {
    padding-right: 10px;
  }
`;
