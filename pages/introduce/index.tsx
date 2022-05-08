import Header from '../../components/Header';
import { IntroduceBlock, MainBlock, TopBlock, SquareBlock } from './styles';
import { GrStackOverflow, GrSemantics, GrCloudlinux } from 'react-icons/gr';

const Introduce = () => {
  return (
    <>
      <Header />
      <IntroduceBlock>
        <TopBlock>
          <p className="top1">시퀀스를 소개합니다</p>
          <p className="top2">성장지향형 프로젝트 동아리</p>
        </TopBlock>
        <MainBlock>
          <SquareBlock>
            <p className="title">
              <b>철학</b>
            </p>
            <p className="content">
              asdasdasdasdasdasasasdasdasdasdasdasdasdd
              <br /> asdasdasdasdasdasdasdasdsaasdasdasdasdasdsad
            </p>
          </SquareBlock>
          <SquareBlock>
            <p className="title">
              <b>추구하는 가치</b>
            </p>
            <div className="icons">
              <GrCloudlinux />
              <GrStackOverflow />
              <GrSemantics />
            </div>
            <div className="icons_name">
              <p>열정</p>
              <p>커뮤니케이션</p>
              <p>성장</p>
            </div>
          </SquareBlock>
          <SquareBlock>
            <p className="title">
              <b>분야</b>
            </p>
            <p className="content">Frontend</p>
            <p className="content">Backend</p>
            <p className="content">DevOps</p>
            <p className="content">Ios</p>
          </SquareBlock>
          <SquareBlock>
            <p className="title">
              <b>김지원님의 한말씀 및 간략한 소개</b>
            </p>
            <p className="content">
              ㅁㄴㅇㅁㄴㅇㅁㄴㅇ문ㅇㅁ아ㅗㅁ오만옴ㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
              <br /> asdhahskjdhaksdkaskdjhaksdhkahskdhsadhashd
            </p>
          </SquareBlock>
        </MainBlock>
      </IntroduceBlock>
    </>
  );
};

export default Introduce;
