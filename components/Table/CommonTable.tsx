import React from 'react';
import { CustomSortIcon, SQTableContainer, SQTh } from './styles';
import { Table, Tbody, Td, Th, Tr } from '@chakra-ui/react';
import { faSort } from '@fortawesome/free-solid-svg-icons';

function CommonTable({ headers, children }) {
  return (
    <>
      <SQTableContainer>
        <Table>
          <SQTh>
            <Tr>
              {headers.map((item, index) => {
                return <Th key={index}>{item}</Th>;
              })}
            </Tr>
          </SQTh>
          <Tbody>{children}</Tbody>
        </Table>
      </SQTableContainer>
    </>
  );
}

export default CommonTable;
