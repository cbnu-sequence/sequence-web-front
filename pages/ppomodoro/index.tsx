import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
const Index = () => {
  return (
    <>
      <Head>
        <title>시퀀스 | 뽀모도로</title>
      </Head>
      <Header />
      <div>뽀모도로타이머</div>
    </>
  );
};

export default Index;
