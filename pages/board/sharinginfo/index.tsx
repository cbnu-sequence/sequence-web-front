import React, { useState } from 'react';
import Head from 'next/head';
import CommonHeader from '../../../components/Table/CommonHeader';
import WriteBtn from '../../../components/Buttons/WriteBtn';
import CommonTable from '../../../components/Table/CommonTable';
import Link from 'next/link';
import { Tr } from '@chakra-ui/react';
import CommonTd from '../../../components/Table/CommonTd';
import dayjs from 'dayjs';
import Pagination from '../../../components/Pagination';
import { useUser } from '../../../hooks/useUser';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { queryKeys } from '../../../react-query/constants';
import { getTable } from '../../../apis/post';
import NoList from '../../../components/NoList';
import { NoListBtnBlock, WriteBtnBlock } from '../../../components/Buttons/styles';
import axios from 'axios';
import { loadMyInfoAPI } from '../../../apis/user';


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

  if (!infoList.data || infoList.data.length == 0) {
    return (
      <>
        <NoList enTitle={'sharing information'} krTitle={'등록된 정보공유가 없습니다'} />;
        {me && me?.role === 'Admin' && (
          <Link href={'./write?category=sharingInfo'} passHref>
            <NoListBtnBlock>
              <WriteBtn />
            </NoListBtnBlock>
          </Link>
        )}
      </>
    );
  }

  return (
    <div>
      <Head>
        <title>시퀀스 | 정보공유</title>
      </Head>
      <CommonHeader title={'정보 공유'} />
      {me && me?.role === 'Admin' && (
        <Link href={'./write?category=sharingInfo'} passHref>
          <WriteBtnBlock>
            <WriteBtn />
          </WriteBtnBlock>
        </Link>
      )}
      <CommonTable headers={['번호', '작성자', '작성일', '제목']}>
        {infoList &&
          infoList.data.map((item, index) => {
            return (
              <Link key={item._id} href={`../../posts/${item._id}?category=sharingInfo`} passHref>
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

export async function getServerSideProps(context) {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.common.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.common.Cookie = cookie;
  }
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.user, () => loadMyInfoAPI(cookie));
  await queryClient.prefetchQuery([queryKeys.notice, 1, 10], () => getTable(queryKeys.sharingInfo, 1, 10));

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
