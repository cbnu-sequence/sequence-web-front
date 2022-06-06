import React from 'react';
import Main from '../components/Main';
import Head from 'next/head';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import axios from 'axios';
import { dehydrate, QueryClient } from 'react-query';
import { queryKeys } from '../react-query/constants';
import { loadMyInfoAPI } from '../apis/user';
config.autoAddCss = false;

function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.jpeg" />
        <title>시퀀스 | cbnu 프로젝트 동아리</title>
      </Head>
      <Main />
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.user, () => loadMyInfoAPI(cookie));

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
