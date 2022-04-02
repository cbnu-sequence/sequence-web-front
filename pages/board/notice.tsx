import React from 'react';
import Header from '../../components/Header';
import Head from 'next/head';
import { mockNotice } from '../../mocks/mockData';
import CommonTable from '../../components/Table/CommonTable';
import CommonTr from '../../components/Table/CommonTr';
import CommonTd from '../../components/Table/CommonTd';
import dayjs from 'dayjs';

const Notice = () => {
  return (
    <div>
      <Head>
        <title>시퀀스 | 공지사항</title>
      </Head>
      <Header />
      <CommonTable headers={['번호', '작성자', '카테고리', '제목']}>
        {mockNotice.map((item, index) => {
          return (
            <CommonTr key={index}>
              <CommonTd>{item.no}.</CommonTd>
              <CommonTd>{item.writer}</CommonTd>
              <CommonTd>{dayjs(item.createdAt).format('YY/MM/DD')}</CommonTd>
              <CommonTd>{item.title}</CommonTd>
            </CommonTr>
          );
        })}
      </CommonTable>
    </div>
  );
};

export default Notice;
