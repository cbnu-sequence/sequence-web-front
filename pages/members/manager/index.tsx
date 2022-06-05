import { useState } from 'react';
import ProfileModal from '../../../components/ProfileModal';
import { ManagerBlock } from '../../../styles/manager';

const Manager = () => {
  const [openmodal, setOpenModal] = useState(false);

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
