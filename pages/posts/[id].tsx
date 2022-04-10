import React from 'react';
import { useRouter } from 'next/router';
import PostDetail from '../../components/PostDetail';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { queryKeys } from '../../react-query/constants';
import { getPost } from '../../apis/post';

function Post() {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;
  return <PostDetail />;
}

export default Post;

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(context.params[0], () => getPost(context.params[0], context.params.id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
