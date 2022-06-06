import { useState } from 'react';
import ProfileModal from '../../../components/ProfileModal';
import { ManagerBlock } from '../../../styles/manager';

const Manager = () => {
  const [openmodal, setOpenModal] = useState(false);

  return (
    <>
      <ManagerBlock>
        <p className="title_top1">2022년도</p>
        <p className="title_top2">시퀀스 운영진</p>
        <div className="cardblock">
          {[{ _id: 'hasonghee', user: { name: '하송희'}},
{ _id: 'chadonghyun', user: { name: '차동현'}}].map(
            (item) => (
              <div key={item._id} className="card" onClick={() => setOpenModal(true)}>
              <div>{item.user.name}</div>
              </div>
            ),
          )}
        </div>
        <div className="cardblock">
          {[{ _id: 'leechanhyuk', user: { name: '이찬혁'}},
{ _id: 'yoonsohee', user: { name: '윤소희'}},{ _id: 'yangkyungjin', user: { name: '양경진'}}].map(
            (item) => (
              <div key={item._id} className="card" onClick={() => setOpenModal(true)}>
              <div>{item.user.name}</div>
              </div>
            ),
          )}
        </div>
        <div className="cardblock">
          {[{ _id: 'kimminkyu', user: { name: '김민규'}},
{ _id: 'kimjiwon', user: { name: '김지원'}},{ _id: 'songhaeun', user: { name: '송하은'}}].map(
            (item) => (
              <div key={item._id} className="card" onClick={() => setOpenModal(true)}>
              <div>{item.user.name}</div>
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