import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getProjectPost } from '../../apis/post';
import ProjectDetail from '../../components/ProjectDetail';

function ProjectDetails() {
  const router = useRouter();
  // @ts-ignore
  const { id }: { id: string } = router.query;
  const { isLoading, error, data } = useQuery(['projectdetail', id], () => getProjectPost(id), {
    keepPreviousData: true,
  });
  if (isLoading) return <div>Loading</div>;

  return (
    <>
      <ProjectDetail data={data.data} />
    </>
  );
}

export default ProjectDetails;
