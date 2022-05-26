import Header from '../../components/Header';
import {
  Block,
  MainBlock,
  TopBlock,
  ExecutiveBlock,
  ProjectTeamBlock,
  TechTeamBlock,
  Table,
} from '../../styles/members';
import ProfileModal from '../../components/ProfileModal';
import { useState } from 'react';

const Members = () => {
  const [openmodal, setOpenModal] = useState(false);

  return (
    <>
      <Header />
      <Block>
        <TopBlock>
          <img src="sqMakesD.png" alt="sequence makes difference" />
        </TopBlock>
        <MainBlock>
          <ProjectTeamBlock>
            <p className="sub_title">프로젝트팀 부원</p>
            <Table>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>URL</th>
                  <th>간략한 소개</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
            <div
              style={{ fontWeight: 'bold', width: '95%', margin: '1rem auto', textAlign: 'center', fontSize: '1.4rem' }}
            >
              곧 완성될 예정입니다.
            </div>
          </ProjectTeamBlock>
          <TechTeamBlock>
            <p className="sub_title">테크코스팀 부원</p>
            <Table>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>URL</th>
                  <th>간략한 소개</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
            <div
              style={{ fontWeight: 'bold', width: '95%', margin: '1rem auto', textAlign: 'center', fontSize: '1.4rem' }}
            >
              곧 완성될 예정입니다.
            </div>
          </TechTeamBlock>
          <ExecutiveBlock>
            <p className="sub_title">운영진</p>
            <div className="cardblock">
              <div className="card" onClick={() => setOpenModal(true)}>
                곧 완성될 예정입니다.
              </div>
              <div className="card" onClick={() => setOpenModal(true)}>
                곧 완성될 예정입니다.
              </div>
              <div className="card" onClick={() => setOpenModal(true)}>
                곧 완성될 예정입니다.
              </div>
              <div className="card" onClick={() => setOpenModal(true)}>
                곧 완성될 예정입니다.
              </div>
            </div>
          </ExecutiveBlock>
        </MainBlock>
      </Block>
      {openmodal && <ProfileModal setOpenModal={setOpenModal} />}
    </>
  );
};
export default Members;
