import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getProjectMembers } from '../../../apis/user';
import NoList from '../../../components/NoList';
import ProJectTeam from '../../../components/ProjectTeam';
import { queryKeys } from '../../../react-query/constants';

const ProjectTeam = () => {
  const {
    data: frontendData,
    isLoading: frontendLoading,
    isError: frontendError,
  } = useQuery([queryKeys.projectTeam, 'frontend']);
  const {
    data: backendData,
    isLoading: backendLoading,
    isError: backendError,
  } = useQuery([queryKeys.projectTeam, 'backend']);
  const {
    data: devopsData,
    isLoading: devopsLoading,
    isError: devopsError,
  } = useQuery([queryKeys.projectTeam, 'devops']);
  const { data: iosData, isLoading: iosLoading, isError: iosError } = useQuery([queryKeys.projectTeam, 'ios']);

  if (frontendLoading || backendLoading || devopsLoading || iosLoading) return <p>로딩중 입니다.</p>;
  if (frontendError || backendError || devopsError || iosError)
    return <NoList enTitle={'members'} krTitle={'정보를 가져올 수 없습니다'} />;

  return (
    <ProJectTeam
      FrontendData={frontendData.data}
      BackendData={backendData.data}
      DevopsData={devopsData.data}
      IosData={iosData.data}
    />
  );
};

export default ProjectTeam;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKeys.projectTeam, 'frontend'], () => getProjectMembers('frontend'));
  await queryClient.prefetchQuery([queryKeys.projectTeam, 'backend'], () => getProjectMembers('backend'));
  await queryClient.prefetchQuery([queryKeys.projectTeam, 'devops'], () => getProjectMembers('devops'));
  await queryClient.prefetchQuery([queryKeys.projectTeam, 'ios'], () => getProjectMembers('ios'));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
