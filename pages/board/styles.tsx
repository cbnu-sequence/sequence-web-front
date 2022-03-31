import styled from '@emotion/styled';
import { TableContainer, Thead, Tr } from '@chakra-ui/react';
import { sqBlack, sqWhite, sqRed } from '../../styles/constants';

const TableRow = styled(Tr)``;

export const SQTh = styled(Thead)`
  background-color: ${sqBlack};
  height: 50px;
  font-size: 32px;
`;

export const SQTableContainer = styled(TableContainer)`
  margin: 20px 20px;
  border: solid 1px rgba(${sqBlack}, 0.1);
`;
