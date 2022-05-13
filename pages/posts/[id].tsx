import React from 'react';
import { useRouter } from 'next/router';
import PostDetail from '../../components/PostDetail';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { queryKeys } from '../../react-query/constants';
import { getPost } from '../../apis/post';
import Header from '../../components/Header';
import { useUser } from '../../hooks/useUser';

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
        writerName={data.data.writer.name}
        writerRole={data.data.writer.role}
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
  console.log(context.query.category, context.query.id);
  await queryClient.prefetchQuery([context.query.category, context.query.id], () =>
    getPost(context.query.category, context.query.id),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
