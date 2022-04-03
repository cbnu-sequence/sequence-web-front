import styled from '@emotion/styled';
import { TableContainer, Td, Thead, Tr } from '@chakra-ui/react';
import { sqBlack, sqWhite, sqRed } from '../../styles/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SQTh = styled(Thead)`
  background-color: ${sqBlack};
  height: 50px;
  font-size: 32px;
  color: ${sqWhite};
  font-size: 15px;
`;

export const SQTableContainer = styled(TableContainer)`
  margin: 20px 20px;
  border: solid 1px rgba(${sqBlack}, 0.1);
  @media screen and (max-width: 768px) {
    th {
      display: none;
    }
    tbody tr {
      display: block;
      td:first-child {
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
`;

export const CustomSortIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
  cursor: pointer;
`;
