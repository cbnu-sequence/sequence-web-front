import React from 'react';
import { useRouter } from 'next/router';
import PostDetail from '../../components/PostDetail';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getPost } from '../../apis/post';
import { GetServerSideProps } from 'next';
import HeadMeta from '../../components/HeadMeta';
import Head from 'next/head';

function Post() {
  const router = useRouter();
  console.log(router);
  // @ts-ignore
  const { id, category }: { id: string; category: string } = router.query;
  const { isLoading, error, data } = useQuery([category, id], () => getPost(category, id), {
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading</div>;

  return (
    <>
      <Head>
        <HeadMeta
          title={'시퀀스'}
          description={'성장지향 프로젝트 동아리 시퀀스'}
          image={data.data.images[0]}
          url={''}
        />
      </Head>
      <PostDetail
        title={data.data.title}
        createdAt={data.data.createdAt}
        updatedAt={data.data.updatedAt}
        writerName={data.data.writer.name}
        writerRole={data.data.writer.role}
        content={data.data.content}
        files={data.data.files}
        images={data.data.images}
        writerId={data.data.writer._id}
        id={id}
        category={category}
      />
    </>
  );
}

export default Post;

export const getServerSideProps = async (context) => {
  try {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery([context.query.category, context.query.id], () =>
      getPost(context.query.category, context.query.id),
    );
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (err) {
    console.error(err);
  }
};
