import axios from 'axios';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { loadMyInfoAPI } from '../../../apis/user';
import ManaGer from '../../../components/Manager';
import { queryKeys } from '../../../react-query/constants';

const Manager = () => {
  return <ManaGer />;
};

export default Manager;

export async function getServerSideProps(context) {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.common.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.common.Cookie = cookie;
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
