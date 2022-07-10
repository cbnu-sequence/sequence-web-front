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
            { _id: 'hasonghee', user: { name: '하송희' }, img: '/songhee.jpeg', description: '안녕하세요! 시퀀스 회장과 웹 프론트 개발을 맡고있는 하송희입니다☺️'},
            { _id: 'chadonghyun', user: { name: '차동현' }, img: '/dong.jpeg', description: '안녕하세요. 시퀀스 부회장과 데브옵스를 담당하는 차동현입니다!' },
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
            { _id: 'leechanhyuk', user: { name: '이찬혁' }, img: '/chan.jpeg', description: '안녕하세요. 시퀀스 데브옵스 담당하는 이찬혁입니다.' },
            { _id: 'yoonsohee', user: { name: '윤소희' }, img: '/sohee.jpeg', description: '안녕하세요! 시퀀스의 앱개발을 담당하고있는 윤소희입니다🙌'},
            { _id: 'yangkyungjin', user: { name: '양경진' }, img: '/koreaygj.jpeg', description: '안녕하세요. 충북대학교 2021년도 알고리즘 대회 1등 양경진입니다! 백준 id: koreaygj✨' },
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
            { _id: 'kimminkyu', user: { name: '김민규' }, img: '/mk.png' , description: '안녕하세요! 백엔드 공부중인 김민규입니다✌' },
            { _id: 'kimjiwon', user: { name: '김지원' }, img: '/naamu.JPG', description: '안녕하세요👋 프론트엔드 하고 있는 김지원입니다.\n도자기와 헬스 무협지를 좋아하며 ci, cd, js에 관심이 많습니다!' },
            { _id: 'songhaeun', user: { name: '송하은' }, img: '/haeun.jpeg', description: '안녕하세요🤗 저는 시퀀스 웹 프론트엔드 개발자 송하은입니다🌸'},
          ].map((item) => (
            <ManagerCard key={item._id} className="card" onClick={() => onClickCard(item)}>
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
