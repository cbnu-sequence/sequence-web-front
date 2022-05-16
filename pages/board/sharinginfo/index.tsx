import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../../../components/Header';
import CommonHeader from '../../../components/Table/CommonHeader';
import WriteBtn from '../../../components/Buttons/WriteBtn';
import CommonTable from '../../../components/Table/CommonTable';
import Link from 'next/link';
import { Tr } from '@chakra-ui/react';
import CommonTd from '../../../components/Table/CommonTd';
import dayjs from 'dayjs';
import Pagination from '../../../components/Pagination';
import { useUser } from '../../../hooks/useUser';
import { useQuery } from 'react-query';
import { queryKeys } from '../../../react-query/constants';
import { getTable } from '../../../apis/post';

function SharingInfo() {
  const fallback = {};
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { user: me } = useUser();
  const { data: infoList = fallback } = useQuery(
    [queryKeys.sharingInfo, page, limit],
    () => getTable(queryKeys.sharingInfo, page, limit),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      refetchInterval: 60000,
    },
  );
  if (!infoList.data) {
    return <div>공유할 정보가 없습니다.</div>;
  }

  return (
    <div>
      <Head>
        <title>시퀀스 | 정보공유</title>
      </Head>
      <Header />
      <CommonHeader title={'정보 공유'} />
      {me?.role === 'User' && <WriteBtn />}
      <CommonTable headers={['번호', '작성자', '작성일', '제목']}>
        {infoList &&
          infoList.data.map((item, index) => {
            return (
              <Link key={item._id} href={`../../posts/${item._id}?category=sharingInfo`}>
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
      <Pagination total={infoList.count} limit={limit} setLimit={setLimit} page={page} setPage={setPage} />
    </div>
  );
}

export default SharingInfo;
