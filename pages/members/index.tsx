import Header from '../../components/Header';
import { Block, MainBlock, TopBlock, ExecutiveBlock, ProjectTeamBlock, TechTeamBlock, Table } from './styles';
import ProfileModal from './profilemodal';
import { useState } from 'react';

const Members = () => {
  const [openmodal, setOpenModal] = useState(false);

  return (
    <>
      <Header />
      <Block>
        <TopBlock>
          <img src="sqMakesD.png" />
        </TopBlock>
        <MainBlock>
          <ExecutiveBlock>
            <p className="sub_title">운영진</p>
            <div className="cardblock">
              <div className="card" onClick={() => setOpenModal(true)}>
                asdsa
                <br />
                asdasd
              </div>
              <div className="card">
                asdsa
                <br />
                asdasd
              </div>
              <div className="card">
                asdsa
                <br />
                asdasd
              </div>
              <div className="card">
                asdsa
                <br />
                asdasd
              </div>
              <div className="card">
                asdsa
                <br />
                asdasd
              </div>
              <div className="card">
                asdsa
                <br />
                asdasd
              </div>
              <div className="card">
                asdsa
                <br />
                asdasd
              </div>
              <div className="card">
                asdsa
                <br />
                asdasd
              </div>
            </div>
          </ExecutiveBlock>
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
              <tbody>
                <tr>
                  <td>홍길동</td>
                  <td>dd</td>
                  <td>dd</td>
                  <td>dd</td>
                </tr>
                <tr>
                  <td>이몽룡</td>
                  <td>dd</td>
                  <td>dd</td>
                  <td>dd</td>
                </tr>
                <tr>
                  <td>춘향이</td>
                  <td>dd</td>
                  <td>dd</td>
                  <td>dd</td>
                </tr>
              </tbody>
            </Table>
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
              <tbody>
                <tr>
                  <td>코코</td>
                  <td>dd</td>
                  <td>dd</td>
                  <td>2살</td>
                </tr>
              </tbody>
            </Table>
          </TechTeamBlock>
        </MainBlock>
      </Block>
      {openmodal && <ProfileModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Members;
