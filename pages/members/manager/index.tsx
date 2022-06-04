import { useState } from 'react';
import { useQuery } from 'react-query';
import { getManagerMembers } from '../../../apis/user';
import NoList from '../../../components/NoList';
import ProfileModal from '../../../components/ProfileModal';
import { queryKeys } from '../../../react-query/constants';
import { ManagerBlock } from '../../../styles/manager';

const Manager = () => {
  const [openmodal, setOpenModal] = useState(false);

  const { data, isError } = useQuery([queryKeys.manager], () => getManagerMembers(), {
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
    <>
      <ManagerBlock>
        <p className="sub_title">운영진</p>
        <div className="cardblock">
          {[{ _id: '123123', user: { name: 'ㅁㄴㅇ', email: 'asdasdasd' }, part: 'asd', githubUrl: 'asdasdads' }].map(
            (item) => (
              <div key={item._id} className="card" onClick={() => setOpenModal(true)}>
                <div>곧 완성될 예정입니다.</div>
              </div>
            ),
          )}
        </div>
      </ManagerBlock>
      {openmodal && <ProfileModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Manager;
