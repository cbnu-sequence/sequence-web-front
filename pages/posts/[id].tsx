import React from 'react';
import { useRouter } from 'next/router';
import PostDetail from '../../components/PostDetail';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getPost } from '../../apis/post';
import Header from '../../components/Header';

function Post() {
  const router = useRouter();
  // @ts-ignore
  const { id, category }: { id: string; category: string } = router.query;
  const { isLoading, error, data } = useQuery([category, id], () => getPost(category, id));
  console.log(data.data.files);
  if (isLoading) return <div>Loading</div>;
  return (
    <>
      <Header />
      <PostDetail
        title={data.data.title}
        createdAt={data.data.createdAt}
        updatedAt={data.data.updatedAt}
        writerName={data.data.writer.name}
        writerRole={data.data.writer.role}
        content={data.data.content}
        files={data.data.file}
        images={data.data.images}
      />
    </>
  );
}

export default Post;

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([context.query.category, context.query.id], () =>
    getPost(context.query.category, context.query.id),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
