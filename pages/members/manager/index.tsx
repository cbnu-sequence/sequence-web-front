import React, { useCallback, useState } from 'react';
import ProfileModal from '../../../components/ProfileModal';
import { ManagerBlock } from '../../../styles/manager';
import ManagerCard from '../../../components/ManagerCard/styles';
const Manager = () => {
  const [openmodal, setOpenModal] = useState(false);
  const [target, setTarget] = useState(null);
  const onClickCard = useCallback((item) => {
    setOpenModal(true);
    setTarget(item);
  }, []);
  return (
    <>
      <ManagerBlock>
        <p className="title_top1">2022년도</p>
        <p className="title_top2">시퀀스 운영진</p>
        <div className="cardblock">
          {[
            { _id: 'hasonghee', user: { name: '하송희' }, img: '/songhee.jpeg', description: '시퀀스 회장입니다.' },
            { _id: 'chadonghyun', user: { name: '차동현' }, img: '/dong.jpeg', description: '시퀀스 부회장입니다.' },
          ].map((item) => (
            <ManagerCard key={item._id} className="card" onClick={() => onClickCard(item)}>
              <div>
                <img className="logotype" src={item.img} />
                {item.user.name}
              </div>
            </ManagerCard>
          ))}
        </div>
        <div className="cardblock">
          {[
            { _id: 'leechanhyuk', user: { name: '이찬혁' }, img: '/chan.jpeg', description: '시퀀스 멋쟁이입니다.' },
            { _id: 'yoonsohee', user: { name: '윤소희' }, img: '/sohee.jpeg' },
            { _id: 'yangkyungjin', user: { name: '양경진' }, img: '/koreaygj.jpeg' },
          ].map((item) => (
            <ManagerCard key={item._id} className="card" onClick={() => onClickCard(item)}>
              <div>
                <img className="logotype" src={item.img} />
                {item.user.name}
              </div>
            </ManagerCard>
          ))}
        </div>
        <div className="cardblock">
          {[
            { _id: 'kimminkyu', user: { name: '김민규' }, img: '/mk.png' },
            { _id: 'kimjiwon', user: { name: '김지원' }, img: '/naamu.JPG' },
            { _id: 'songhaeun', user: { name: '송하은' }, img: '/haeun.jpeg' },
          ].map((item) => (
            <ManagerCard key={item._id} className="card" onClick={() => () => onClickCard(item)}>
              <div>
                <img className="logotype" src={item.img} />
                {item.user.name}
              </div>
            </ManagerCard>
          ))}
        </div>
      </ManagerBlock>
      {openmodal && <ProfileModal setOpenModal={setOpenModal} item={target} />}
    </>
  );
};

export default Manager;
