import Header from '../../components/Header';
import { IntroduceBlock, MiddleBlock, TopBlock, SquareBlock, ColorLine, MapBlock, CultureBlock } from './styles';
import { GrStackOverflow, GrArchlinux, GrCloudlinux } from 'react-icons/gr';
import Map from './map';

const Introduce = () => {
  return (
    <>
      <Header />
      <IntroduceBlock>
        <TopBlock>
          <p className="top1">시퀀스를 소개합니다</p>
          <p className="top2">성장지향형 프로젝트 동아리</p>
        </TopBlock>
        <CultureBlock>
          <p className="culture_title">문화</p>
          <ul className="culture_content">
            <li>
              1. 내일의 내가 <span className="txt_color">오늘</span>보다 나음을 지향한다
            </li>
            <li>
              2. <span className="txt_color">서로</span>에게 <span className="txt_color">상처</span>가 될 말들을
              지양한다
            </li>
            <li>
              3. 잘못은 <span className="txt_color">인정</span>하고 같은 실수를 <span className="txt_color">반복</span>
              하지 않는다
            </li>
            <li>
              4. 다름을 <span className="txt_color">존중</span>한다
            </li>
            <li>
              5. 완벽한 것보단 <span className="txt_color">빠른</span> 것을 추구한다
            </li>
          </ul>
        </CultureBlock>
        <ColorLine />
        <MiddleBlock>
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
                <GrArchlinux />
              </div>
            </div>
            <div className="icons_name">
              <p>근거있는 프로젝트</p>
              <p>커뮤니케이션</p>
              <p>성장지향</p>
            </div>
          </SquareBlock>
          <SquareBlock>
            <p className="title">연구실</p>
            <p className="lab_content">유재수 교수님 연구실은 asdhashkdhad asdhjaksdhashdaksd</p>
          </SquareBlock>
        </MiddleBlock>
        <ColorLine />
        <MapBlock>
          <p className="map_title">위치</p>
          <p className="map_content">주소: 충청북도 청주시 서원구 개신동 29</p>
          <p className="map_content">우편번호: 362804</p>
          <Map />
        </MapBlock>
      </IntroduceBlock>
    </>
  );
};

export default Introduce;
