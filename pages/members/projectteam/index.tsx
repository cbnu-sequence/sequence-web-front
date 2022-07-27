import React from 'react';
import NoList from '../../../components/NoList';
import ProJectTeam from '../../../components/ProjectTeam';
import { useProjectMembers } from '../../../hooks/useProjectMembers';

const ProjectTeam = () => {
  const { frontenddata, backenddata, devopsdata, iosdata, frontendError, backendError, devopsError, iosError } =
    useProjectMembers();
  if (!frontenddata || !backenddata || !devopsdata || !iosdata) return <p>로딩중 입니다.</p>;
  if (frontendError || backendError || devopsError || iosError)
    return <NoList enTitle={'members'} krTitle={'정보를 가져올 수 없습니다'} />;

  const { data: FrontendData } = frontenddata.data;
  const { data: BackendData } = backenddata.data;
  const { data: DevopsData } = devopsdata.data;
  const { data: IosData } = iosdata.data;

  return (
    <>
      <ProJectTeam FrontendData={FrontendData} BackendData={BackendData} DevopsData={DevopsData} IosData={IosData} />
    </>
  );
};

export default ProjectTeam;
