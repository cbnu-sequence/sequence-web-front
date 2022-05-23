import styled from '@emotion/styled';
import { TableContainer, Td, Thead, Tr } from '@chakra-ui/react';
import { sqBlack, sqWhite, sqRed } from '../../styles/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SQTh = styled(Thead)`
  background-color: ${sqBlack};
  height: 55px;
  word-spacing: 5px;
  color: ${sqWhite};
  font-size: 8px;
`;

export const SQTableContainer = styled.div`
  display: flex;
  width: 80vw;
  margin: 0 auto;
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    padding-top: 0px;

    th {
      display: none;
    }
    tbody tr {
      border: 3px solid black;
      display: block;
      cursor: pointer;
      td:first-of-type {
        display: none;
      }
      & > td {
        display: flex;
        flex-basis: 100%;
        padding: 10px 0;
      }
    }
  }
`;

export const SQTd = styled(Td)`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  :last-of-type {
    width: 50%;
  }
`;

export const CustomSortIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
  cursor: pointer;
`;

export const TitleDiv = styled.div`
  display: flex;
  width: 100vw;
  padding-top: -10px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

export const Title = styled.h3`
  font-size: 40px;
`;
