import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import NoList from '../../components/NoList';

const Pomodoro = () => {
  return (
    <>
      <Head>
        <title>시퀀스 | 뽀모도로</title>
      </Head>
      <div>해당 페이지는 준비중입니다. 잠시 기다려 주세요!!!</div>
      <NoList krTitle={'뽀모도로'} enTitle={'pomodoro'} />
    </>
  );
};

export default Pomodoro;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'onlyBody',
    },
  };
};
