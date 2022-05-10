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
            <p className="title">문화</p>
            <ul className="culture_content">
              <li>1. 내일의 내가 오늘보다 나음을 지향한다</li>
              <li>2. 서로에게 상처가 될 말들을 지양한다</li>
              <li>3. 잘못은 인정하고 같은 실수를 반복하지 않는다</li>
              <li>4. 다름을 존중한다</li>
              <li>5. 완벽한 것보단 빠른 것을 추구한다</li>
            </ul>
          </SquareBlock>
          <SquareBlock>
            <p className="title">키워드</p>
            <div className="icons">
              <div>
                <GrCloudlinux />
              </div>
              <div>
                <GrStackOverflow />
              </div>
              <div>
                <GrSemantics />
              </div>
            </div>
            <div className="icons_name">
              <p>근거있는 프로젝트</p>
              <p>커뮤니케이션</p>
              <p>성장지향</p>
            </div>
          </SquareBlock>
          <SquareBlock>
            <p className="title">김지원님의 한말씀 및 간략한 소개</p>
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
