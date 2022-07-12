import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import CommonTable from '../../../components/Table/CommonTable';
import CommonTd from '../../../components/Table/CommonTd';
import dayjs from 'dayjs';
import { getTable } from '../../../apis/post';
import { dehydrate, QueryClient, useQuery, useQueryClient } from 'react-query';
import { queryKeys } from '../../../react-query/constants';
import CommonHeader from '../../../components/Table/CommonHeader';
import Pagination from '../../../components/Pagination';
import { Tr } from '@chakra-ui/react';
import Link from 'next/link';
import { useUser } from '../../../hooks/useUser';
import WriteBtn from '../../../components/Buttons/WriteBtn';
import { NoListBtnBlock, WriteBtnBlock } from '../../../components/Buttons/styles';
import NoList from '../../../components/NoList';
import axios from 'axios';
import { loadMyInfoAPI } from '../../../apis/user';

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
    if (me && me.role === 'Admin') {
      return (
        <>
          <NoList enTitle={'notice'} krTitle={'등록된 공지사항이 없습니다'} />;
          <Link href={'./write?category=notice'} passHref>
            <NoListBtnBlock>
              <WriteBtn />
            </NoListBtnBlock>
          </Link>
        </>
      );
    } else {
      return <NoList enTitle={'notice'} krTitle={'등록된 공지사항이 없습니다'} />;
    }
  }

  return (
    <div>
      <Head>
        <title>시퀀스 | 공지사항</title>
      </Head>
      <CommonHeader title={'공지사항'} />

      {me && me.role === 'Admin' && (
        <>
          <Link href={'./write?category=notice'} passHref>
            <WriteBtnBlock>
              <WriteBtn />
            </WriteBtnBlock>
          </Link>
        </>
      )}

      <CommonTable headers={['번호', '작성자', '작성일', '제목']}>
        {noticeList &&
          noticeList.data.map((item, index) => {
            return (
              <Link key={item._id} href={`../../posts/${item._id}?category=notice`} passHref>
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

export async function getServerSideProps(context) {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.user, () => loadMyInfoAPI(cookie));
  await queryClient.prefetchQuery([queryKeys.notice, 1, 10], () => getTable(queryKeys.notice, 1, 10));

  let cleanInfo = JSON.parse(JSON.stringify(dehydrate(queryClient)));
  if (cleanInfo.queries[0].state.data && typeof cleanInfo.queries[0].state.data != 'undefined') {
    cleanInfo.queries[0].state.data = cleanInfo.queries[0].state.data.data;
  }

  return {
    props: {
      dehydratedState: cleanInfo,
    },
  };
}
