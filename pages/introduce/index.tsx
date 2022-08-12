import Header from '../../components/Header';
import { IntroduceBlock, TopBlock, SquareBlock, ColorLine, MapBlock, CultureBlock } from '../../styles/introduce';
import { GrStackOverflow, GrArchlinux, GrCloudlinux } from 'react-icons/gr';
import Map from '../../components/Map/map';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import { dehydrate, QueryClient } from 'react-query';
import { queryKeys } from '../../react-query/constants';
import { loadMyInfoAPI } from '../../apis/user';

const Introduce = () => {
  return (
    <>
      <Head>
        <title>시퀀스 | 시퀀스 소개</title>
      </Head>
      <IntroduceBlock>
        <TopBlock>
          <img src="/hellosequence.png" />
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
          <div className="lab_content">
            <div className="lab_content__left">
              <p className="big-p">KAIST</p>
              <p className="small-p">전산학 공학박사</p>

              <img src="https://inform.chungbuk.ac.kr/bbs/data/member/10.gif" />
              <div className="professor">
                <p className="big-p">유재수</p>
                <p className="small-p">교수님</p>
              </div>
              <p className="text">
                 저희 동아리는 유재수 교수님 연구실 NETDB를 사용하고 있으며,
                <br />
                연구실에서는 데이터를 수집, 저장, 관리, 처리 및 분석하는 기술을 연구하며
                <br />
                이 외에도 연구기관/산업체 위탁 및 공동연구에 관한 연구 수행,
                <br />
                SW등록 및 개발실적 사업화/기술이전 학술대회 발표 및 연구결과 논문 발표,
                <br />
                지적 재산권 보호를 위한 특허 출원 및 등록을 다루고 있습니다.
              </p>
            </div>
            <div className="lab_content__right">
              <span>Data 기술 연구</span>
              <ul>
                <li>연구기관/산업체 위탁 및 공동 연구</li>
                <li>SW 등록</li>
                <li>개발 실적 사업화</li>
                <li>기술이전 학술대회 발표</li>
                <li>특허 출원 및 등록</li>
              </ul>
            </div>
          </div>
          <p className="lab-btn">
            <Link href="http://netdb.cbnu.ac.kr/">
              <button className="lab_href">NETDB</button>
            </Link>
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

export async function getServerSideProps(context) {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.common.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.common.Cookie = cookie;
  }
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.user, () => loadMyInfoAPI(cookie));

  let cleanInfo = JSON.parse(JSON.stringify(dehydrate(queryClient)));
  if (cleanInfo.queries[0].state.data && typeof cleanInfo.queries[0].state.data != 'undefined') {
    cleanInfo.queries[0].state.data = cleanInfo.queries[0].state.data.data;
  }
  return {
    props: {
      dehydratedState: cleanInfo,
    },
  };
}
