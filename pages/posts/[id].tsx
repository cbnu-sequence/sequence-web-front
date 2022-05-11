import React from 'react';
import { useRouter } from 'next/router';
import PostDetail from '../../components/PostDetail';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { queryKeys } from '../../react-query/constants';
import { getPost } from '../../apis/post';
import Header from '../../components/Header';

function Post() {
  const router = useRouter();
  // @ts-ignore
  const { id, category }: { id: string; category: string } = router.query;
  const { isLoading, error, data } = useQuery([category, id], () => getPost(category, id));
  if (isLoading) return <div>Loading</div>;
  return (
    <>
      <Header />
      <PostDetail
        title={data.data.title}
        writer={data.data.writer.name}
        content={data.data.content}
        file={data.data.file}
        images={data.data.images}
      />
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
