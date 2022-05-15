import Header from '../../components/Header';
import { IntroduceBlock, TopBlock, SquareBlock, ColorLine, MapBlock, CultureBlock } from './styles';
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
          <img src="culture.png" />
        </CultureBlock>
        <ColorLine />
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
        <ColorLine />
        <SquareBlock>
          <p className="title">연구실</p>
          <p className="lab_content">저희 동아리는 KAIST 전산학 공학박사 유재수 교수님 연구실을 사용하고 있습니다.</p>
        </SquareBlock>
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
