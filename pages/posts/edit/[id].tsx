import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getPost } from '../../../apis/post';
import EditBoard from '../../../components/EditBoard';

const PostEdit = () => {
  const router = useRouter();
  // @ts-ignore
  const { id, category }: { id: string; category: string } = router.query;
  const { isLoading, error, data } = useQuery([category, id]);

  if (isLoading) return <div>로딩중입니다..</div>;
  if (error) return <div>정보를 가져올 수 없습니다.</div>;
  return <EditBoard data={data} id={id} category={category} />;
};

export default PostEdit;

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
