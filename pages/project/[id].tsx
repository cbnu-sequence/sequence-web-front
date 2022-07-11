import React from 'react';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getProjectPost } from '../../apis/post';
import ProjectDetail from '../../components/ProjectDetail';
import axios from 'axios';
import { loadMyInfoAPI } from '../../apis/user';
import { queryKeys } from '../../react-query/constants';
import HeadMeta from '../../components/HeadMeta';
function ProjectDetails() {
  const router = useRouter();
  // @ts-ignore
  const { id }: { id: string } = router.query;
  const {
    isLoading,
    data: { data: project },
  } = useQuery([queryKeys.project, id], () => getProjectPost(id), {
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading</div>;

  return (
    <>
      <HeadMeta title={project.title} description={project.content} />
      <ProjectDetail data={project} />
    </>
  );
}

export default ProjectDetails;
export async function getServerSideProps(context) {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.common.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.common.Cookie = cookie;
  }
  const id = context.query.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.user, () => loadMyInfoAPI(cookie));
  await queryClient.prefetchQuery([queryKeys.project, id], () => getProjectPost(id));
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
