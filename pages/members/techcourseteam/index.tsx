import { useQuery } from 'react-query';
import { getTechCourseMembers } from '../../../apis/user';
import NoList from '../../../components/NoList';
import { queryKeys } from '../../../react-query/constants';
import { TechcourseTeamBlock } from '../../../styles/TechcourseTeam';

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

  console.log(Data);

  return (
    <TechcourseTeamBlock>
      {Data.map((item) => (
        <div key={item._id}>
          <div>{item.user.name}</div>
          <div>{item.part}</div>
          <div>{item.user.email}</div>
          <div>{item.githubUrl}</div>
          <div></div>
        </div>
      ))}
    </TechcourseTeamBlock>
  );
};

export default TechcourseTeam;
