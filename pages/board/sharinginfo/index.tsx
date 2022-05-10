import React from 'react';
import Head from 'next/head';
import Header from '../../../components/Header';
import CommonHeader from '../../../components/Table/CommonHeader';

function SharingInfo() {
  return (
    <div>
      <Head>
        <title>시퀀스 | 공지사항</title>
      </Head>
      <Header />
      <CommonHeader title={'정보 공유'} />
    </div>
  );
}

export default SharingInfo;
