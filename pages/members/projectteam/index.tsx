import Link from 'next/link';
import { useQuery } from 'react-query';
import { getProjectMembers } from '../../../apis/user';
import NoList from '../../../components/NoList';
import { queryKeys } from '../../../react-query/constants';
import {
  BackendBlock,
  ColorLine,
  DevOpsBlock,
  FrontEndBlock,
  IosBlock,
  ProjectTeamBlock,
  TopSquareBlock,
} from '../../../styles/ProjectTeam';

const ProjectTeam = () => {
  const { data, isError } = useQuery([queryKeys.projectTeam], () => getProjectMembers(), {
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: 60000,
  });

  if (!data) return <p>로딩중 입니다.</p>;

  if (isError) return <NoList enTitle={'members'} krTitle={'정보를 가져올 수 없습니다'} />;

  const Data = data.data.data;

  console.log(Data);

  return (
    <ProjectTeamBlock>
      <div className="toptitle">프로젝트 팀</div>
      <TopSquareBlock>
        <Link href="#frontend">
          <div className="top_square">
            <div style={{ textAlign: 'center' }}>
              WEB
              <br />
              FRONT - END
            </div>
          </div>
        </Link>
        <Link href="#backend">
          <div className="top_square">BACK - END</div>
        </Link>
        <Link href="#devops">
          <div className="top_square">IOS</div>
        </Link>
        <Link href="#ios">
          <div className="top_square">DEV</div>
        </Link>
      </TopSquareBlock>
      <FrontEndBlock id="frontend">
        <div className="secondtitle">프론트엔드</div>
        <ColorLine />
        <div className="content">
          {Data.map((item) => (
            <div key={item._id}>
              <div>{item.user.name}</div>
              <div>{item.part}</div>
              <div>{item.user.email}</div>
              <div>{item.githubUrl}</div>
              <div></div>
            </div>
          ))}
        </div>
      </FrontEndBlock>
      <BackendBlock id="backend">
        <div className="secondtitle">백엔드</div>
        <ColorLine />
      </BackendBlock>

      <DevOpsBlock id="devops">
        <div className="secondtitle">데브옵스</div>
        <ColorLine />
      </DevOpsBlock>

      <IosBlock id="ios">
        <div className="secondtitle">ios</div>
        <ColorLine />
      </IosBlock>
    </ProjectTeamBlock>
  );
};

export default ProjectTeam;
