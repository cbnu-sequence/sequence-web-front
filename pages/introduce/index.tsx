import Header from '../../components/Header';
import { IntroduceBlock, TopBlock, SquareBlock, ColorLine, MapBlock, CultureBlock } from '../../styles/introduce';
import { GrStackOverflow, GrArchlinux, GrCloudlinux } from 'react-icons/gr';
import Map from '../../components/Map/map';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

const Introduce = () => {
  return (
    <>
      <Head>
        <title>시퀀스 | 시퀀스 소개</title>
      </Head>
      <IntroduceBlock>
        <TopBlock>
          <div>
            <p className="top1">시퀀스를 소개합니다</p>
            <p className="top2">성장지향형 프로젝트 동아리</p>
          </div>
        </TopBlock>
        <CultureBlock>
          <p className="culture_title">문화</p>
          <img
            src="culture.png"
            alt="1.내일의 내가 오늘보다 나음을 지향한다 2.서로에게 상처가 될 말들을 지향한다 3.잘못은 인정하고 같은 실수를 반복하지 않는다 4.다름을 존중한다 5.완벽한 것보단 빠른 것을 추구한다"
          />
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
          <p className="lab_content">
            저희 동아리는 KAIST 전산학 공학박사 유재수 교수님 연구실을 사용하고 있습니다. <br />
            연구실에서는 데이터를 수집, 저장, 관리, 처리 및 분석하는 기술을 연구하며 이 외에도 실무 업무를 통해 프로젝트
            관리 및 개발 능력 향상, 연구기관/산업체 위탁 및 공동연구에 관한 연구 수행, SW등록 및 개발실적
            사업화/기술이전 학술대회 발표 및 연구결과 논문 발표, 지적 재산권 보호를 위한 특허 출원 및 등록을 다루고
            있습니다. <br />
            또한 현재 웹 프로젝트에서 연구실 내에 있는 서버를 사용하고 있습니다. <br />
          </p>
          <p className="lab_href">
            <Link href="http://netdb.cbnu.ac.kr/">NETDB</Link>
          </p>
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
