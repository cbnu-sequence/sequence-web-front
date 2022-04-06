import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Head from 'next/head';
import CommonTable from '../../components/Table/CommonTable';
import CommonTr from '../../components/Table/CommonTr';
import CommonTd from '../../components/Table/CommonTd';
import dayjs from 'dayjs';
import { getTable } from '../../apis/post';
import { useQuery, useQueryClient } from 'react-query';
import { queryKeys } from '../../react-query/constants';
import CommonHeader from '../../components/Table/CommonHeader';
import Pagination from '../../components/Pagination';

const fallback = [];
const Notice = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: noticeList = fallback } = useQuery([queryKeys.notice, page], () => getTable(queryKeys.notice, page), {
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: 60000,
  });

  if (!noticeList.data) {
    return <div>공지사항이 없습니다.</div>;
  }
  return (
    <div>
      <Head>
        <title>시퀀스 | 공지사항</title>
      </Head>
      <Header />
      <CommonHeader title={'공지사항'} />
      <CommonTable headers={['번호', '작성자', '작성일', '제목']}>
        {noticeList &&
          noticeList.data.map((item, index) => {
            return (
              <CommonTr key={index}>
                <CommonTd>{index + 1}.</CommonTd>
                <CommonTd>{item.writer.name}</CommonTd>
                <CommonTd>{dayjs(item.createdAt).format('YY/MM/DD')}</CommonTd>
                <CommonTd>{item.title}</CommonTd>
              </CommonTr>
            );
          })}
      </CommonTable>
      <Pagination total={noticeList.count} limit={limit} setLimit={setLimit} page={page} setPage={setPage} />
    </div>
  );
};

export default Notice;
