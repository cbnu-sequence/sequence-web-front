import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.jpeg" />
        <title>시퀀스 | cbnu 프로젝트 동아리</title>
      </Head>
      <Header />
    </div>
  );
}

export default Home;
