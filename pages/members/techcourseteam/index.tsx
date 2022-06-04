import Link from 'next/link';
import Head from 'next/head';
import { useQuery } from 'react-query';
import { getProjectMembers, getTechCourseMembers } from '../../../apis/user';
import NoList from '../../../components/NoList';
import { queryKeys } from '../../../react-query/constants';
import { MembersBlock, TCIntroductionDiv, TCMemberDiv, TechcourseteamDiv } from '../../../styles/TechcourseTeam';

const TechcourseTeam = () => {
  const { data, isError } = useQuery([queryKeys.techcourseTeam], () => getTechCourseMembers(), {
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: 60000,
  });

  if (!data) return <p>로딩중 입니다.</p>;
  if (isError) return <NoList enTitle={'members'} krTitle={'정보를 가져올 수 없습니다'} />;
  const Data = data.data.data;

  return (
    <>
      <Head>
        <title>시퀀스 | 테크코스팀 소개</title>
      </Head>
      <TechcourseteamDiv>
        <TCIntroductionDiv>
          <p className="pullname">정보통신 테크 코스</p>
          <p className="shortname">정 테 코</p>
          <div className="introduceBox">
            <p className="introduce_top">프로그래밍 입문부터 함께하는 시퀀스의 테크코스</p>
            <div className="introduceBox2">
              <div className="introduce_1semester">
                1학기
                <div className="introduce_content_1">
                  멘토멘티 시스템 운영
                  <br />
                  정기세미나 진행
                </div>
              </div>
              <div className="introduce_2semester">
                2학기
                <div className="introduce_content_2">
                  간단한 프로젝트 준비
                  <br />
                  정기세미나 진행
                </div>
              </div>
            </div>
          </div>
        </TCIntroductionDiv>

        <TCMemberDiv>
          <div>테크코스팀</div>
          <div className="tcMemberBox" />
        </TCMemberDiv>
      </TechcourseteamDiv>

      <MembersBlock>
        {Data.map((item) => (
          <div key={item._id} className="item">
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
        ))}
      </MembersBlock>
    </>
  );
};

export default TechcourseTeam;
