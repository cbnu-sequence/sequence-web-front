import React from 'react';
import { CustomSortIcon, SQTableContainer, SQTh } from './styles';
import { Table, Tbody, Td, Th, Tr } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

function CommonTable({ headers, children }) {
  return (
    <>
      <SQTableContainer overflowX={'hidden'}>
        <Table variant="striped">
          <SQTh>
            <Tr>
              {headers.map((item, index) => {
                return (
                  <Th key={index}>
                    {item}
                    <CustomSortIcon icon={faSort} />
                  </Th>
                );
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
