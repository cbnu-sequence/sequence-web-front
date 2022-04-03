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
import { noticeList } from '../../interfaces/post';

const fallback = [];
const Notice = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  useEffect(() => {
    // assume increment of one month
    const nextPage = page + 1;
    queryClient.prefetchQuery([queryKeys.notice, page], () => getTable(queryKeys.notice, nextPage));
  }, [queryClient, page]);

  const { data: noticeList = fallback } = useQuery([queryKeys.notice, page], () => getTable(queryKeys.notice, page), {
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: 60000,
  });

  if (!noticeList) {
    return <div>공지사항이 없습니다.</div>;
  }
  return (
    <div>
      <Head>
        <title>시퀀스 | 공지사항</title>
      </Head>
      <Header />
      <CommonTable headers={['번호', '작성자', '카테고리', '제목']}>
        {noticeList &&
          noticeList.map((item, index) => {
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
