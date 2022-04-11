import React from 'react';
import { useRouter } from 'next/router';
import PostDetail from '../../components/PostDetail';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { queryKeys } from '../../react-query/constants';
import { getPost } from '../../apis/post';
import Header from '../../components/Header';

function Post() {
  const router = useRouter();
  console.log(router.query);
  // @ts-ignore
  const { id }: { id: string } = router.query;
  const { isLoading, error, data } = useQuery(['notice', id], () => getPost('notice', id));
  if (isLoading) return <div>Loading</div>;
  return (
    <>
      <Header />
      <PostDetail title={data.data.title} writer={data.data.writer.name} content={data.data.content} />
    </>
  );
}

export default Post;

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['notice', context.params.id], () => getPost('notice', context.params.id));

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
