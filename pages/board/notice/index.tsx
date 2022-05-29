import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Head from 'next/head';
import CommonTable from '../../../components/Table/CommonTable';
import CommonTd from '../../../components/Table/CommonTd';
import dayjs from 'dayjs';
import { getTable } from '../../../apis/post';
import { useQuery, useQueryClient } from 'react-query';
import { queryKeys } from '../../../react-query/constants';
import CommonHeader from '../../../components/Table/CommonHeader';
import Pagination from '../../../components/Pagination';
import { Tr } from '@chakra-ui/react';
import Link from 'next/link';
import { useUser } from '../../../hooks/useUser';
import WriteBtn from '../../../components/Buttons/WriteBtn';
import { WriteBtnBlock } from '../../../components/Buttons/styles';
import NoList from '../../../components/NoList';

const fallback = [];
const Notice = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { user: me } = useUser();
  const { data: noticeList = fallback } = useQuery(
    [queryKeys.notice, page, limit],
    () => getTable(queryKeys.notice, page, limit),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      refetchInterval: 60000,
    },
  );

  if (!noticeList.data || noticeList.data.length == 0) {
    return <NoList enTitle={'notice'} krTitle={'공지사항'} />;
  }

  return (
    <div>
      <Head>
        <title>시퀀스 | 공지사항</title>
      </Head>
      <CommonHeader title={'공지사항'} />

      {me && me.data.role === 'User' && (
        <WriteBtnBlock>
          <WriteBtn />
        </WriteBtnBlock>
      )}

      <CommonTable headers={['번호', '작성자', '작성일', '제목']}>
        {noticeList &&
          noticeList.data.map((item, index) => {
            return (
              <Link key={item._id} href={`../../posts/${item._id}?category=notice`}>
                <Tr key={item._id}>
                  <CommonTd>{limit * (page - 1) + (index + 1)}.</CommonTd>
                  <CommonTd>{item.writer.name}</CommonTd>
                  <CommonTd>{dayjs(item.createdAt).format('YY/MM/DD')}</CommonTd>
                  <CommonTd>{item.title}</CommonTd>
                </Tr>
              </Link>
            );
          })}
      </CommonTable>
      <Pagination total={noticeList.count} limit={limit} setLimit={setLimit} page={page} setPage={setPage} />
    </div>
  );
};

export default Notice;
