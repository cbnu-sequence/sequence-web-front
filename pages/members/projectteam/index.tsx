import Link from 'next/link';
import NoList from '../../../components/NoList';
import { useProjectMembers } from '../../../hooks/useProjectMembers';
import { ColorLine, ContentBlock, MembersBlock, ProjectTeamBlock, TopSquareBlock } from '../../../styles/ProjectTeam';

const ProjectTeam = () => {
  const { frontenddata, backenddata, devopsdata, iosdata, frontendError, backendError, devopsError, iosError } =
    useProjectMembers();
  if (!frontenddata || !backenddata || !devopsdata || !iosdata) return <p>로딩중 입니다.</p>;
  if (frontendError || backendError || devopsError || iosError)
    return <NoList enTitle={'members'} krTitle={'정보를 가져올 수 없습니다'} />;

  const FrontendData = frontenddata.data.data;
  const BackendData = backenddata.data.data;
  const DevopsData = devopsdata.data.data;
  const IosData = iosdata.data.data;

  console.log(FrontendData);

  return (
    <ProjectTeamBlock>
      <div className="toptitle">프로젝트 팀</div>
      <TopSquareBlock>
        <Link href="#front">
          <div className="top_square">
            <div style={{ textAlign: 'center' }}>
              WEB
              <br />
              FRONT - END
            </div>
          </div>
        </Link>
        <Link href="#bak">
          <div className="top_square">BACK - END</div>
        </Link>
        <Link href="#ios">
          <div className="top_square">IOS</div>
        </Link>
        <Link href="#dev">
          <div className="top_square">DEV</div>
        </Link>
      </TopSquareBlock>
      <MembersBlock id="front">
        <div className="secondtitle">프론트엔드</div>
        <ColorLine />
        <ContentBlock>
          {FrontendData.map((item) => (
            <div key={item._id}>
              <div className="item_top">
                <div className="name">{item.user.name}</div>
                {item.githubUrl && (
                  <Link href={item.githubUrl}>
                    <img src="/github.png" />
                  </Link>
                )}
                <div className="email">
                  [{item.user.email.slice(-6) === ':kakao' ? item.user.email.slice(0, -6) : item.user.email} ]
                </div>
              </div>
              <div className="item_bottom">{item.comment ? `: ${item.comment}` : ': 소개가 없습니다'}</div>
            </div>
          ))}
        </ContentBlock>
      </MembersBlock>
      <MembersBlock id="bak">
        <div className="secondtitle">백엔드</div>
        <ColorLine />
        <ContentBlock>
          {BackendData.map((item) => (
            <div key={item._id}>
              <div className="item_top">
                <div className="name">{item.user.name}</div>
                {item.githubUrl && (
                  <Link href={item.githubUrl}>
                    <img src="/github.png" />
                  </Link>
                )}
                <div className="email">
                  [{item.user.email.slice(-6) === ':kakao' ? item.user.email.slice(0, -6) : item.user.email} ]
                </div>
              </div>
              <div className="item_bottom">{item.comment ? `: ${item.comment}` : ': 소개가 없습니다'}</div>
            </div>
          ))}
        </ContentBlock>
      </MembersBlock>

      <MembersBlock id="ios">
        <div className="secondtitle">ios</div>
        <ColorLine />
        <ContentBlock>
          {IosData.map((item) => (
            <div key={item._id}>
              <div className="item_top">
                <div className="name">{item.user.name}</div>
                {item.githubUrl && (
                  <Link href={item.githubUrl}>
                    <img src="/github.png" />
                  </Link>
                )}
                <div className="email">
                  [{item.user.email.slice(-6) === ':kakao' ? item.user.email.slice(0, -6) : item.user.email} ]
                </div>
              </div>
              <div className="item_bottom">{item.comment ? `: ${item.comment}` : ': 소개가 없습니다'}</div>
            </div>
          ))}
        </ContentBlock>
      </MembersBlock>

      <MembersBlock id="dev">
        <div className="secondtitle">데브옵스</div>
        <ColorLine />
        <ContentBlock>
          {DevopsData.map((item) => (
            <div key={item._id}>
              <div className="item_top">
                <div className="name">{item.user.name}</div>
                {item.githubUrl && (
                  <Link href={item.githubUrl}>
                    <img src="/github.png" />
                  </Link>
                )}
                <div className="email">
                  [{item.user.email.slice(-6) === ':kakao' ? item.user.email.slice(0, -6) : item.user.email} ]
                </div>
              </div>
              <div className="item_bottom">{item.comment ? `: ${item.comment}` : ': 소개가 없습니다'}</div>
            </div>
          ))}
        </ContentBlock>
      </MembersBlock>
    </ProjectTeamBlock>
  );
};

export default ProjectTeam;
