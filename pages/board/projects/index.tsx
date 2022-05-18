import React from 'react';
import Header from '../../../components/Header';
import CommonHeader from '../../../components/Table/CommonHeader';
import Head from 'next/head';

function projects() {
  return (
    <div>
      <Head>
        <title>시퀀스 | 공지사항</title>
      </Head>
      <Header />
      <CommonHeader title="프로젝트" />
    </div>
  );
}

export default projects;
