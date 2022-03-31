import React from 'react';
import Header from '../../components/Header';
import Head from 'next/head';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { SQTableContainer, SQTh } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const Notice = () => {
  return (
    <div>
      <Head>
        <title>시퀀스 | 공지사항</title>
      </Head>
      <Header />
      <SQTableContainer overflowX={'hidden'}>
        <Table variant={'simple'}>
          <SQTh>
            <Tr>
              <Th>
                작성자 <FontAwesomeIcon icon={faSort} />
              </Th>
              <Th>카테고리</Th>
              <Th>제목</Th>
            </Tr>
          </SQTh>
          <Tbody>
            <Td>김지원</Td>
            <Td>회의일정</Td>
            <Td>
              3월 31일 오픈소스 회의가
              ㅁ니ㅏㄹ어ㅏㅁㄴㅇ럼니ㅏ럼ㄴ이라ㅓ미ㅏ러ㅗㅜㅋ타ㅓ추퓨키터ㅘㅊ퓨ㅜㅏ커ㅜ피ㅏ컽추프카ㅣ텇풐타ㅓ푸키ㅏ텇풐티ㅏㅓㅜㅋㅌ피ㅏㅓㅜㅍ키카
            </Td>
          </Tbody>
        </Table>
      </SQTableContainer>
    </div>
  );
};

export default Notice;
