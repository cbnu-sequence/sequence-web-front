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
  @media screen and (max-width: 768px) {
    height: 20px;
  }
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
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      margin-bottom: 8px;
      display: block;
      cursor: pointer;
      td:first-of-type {
        display: none;
      }
      td:nth-of-type(2) {
        :before {
          content: '작성자:';
          padding-left: 4px;
          font-size: 10px;
          font-weight: 400;
          padding-right: 5px;
        }
      }
      td:nth-of-type(3) {
        display: none;
      }
      td:nth-of-type(4) {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        :before {
          content: '제목:';
          padding-left: 4px;
          font-size: 10px;
          font-weight: 400;
          padding-right: 5px;
        }
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
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

export const Title = styled.h3`
  font-size: 40px;
`;
