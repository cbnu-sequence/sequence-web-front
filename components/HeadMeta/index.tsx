import Head from 'next/head';
import { HeadProps } from '../../interfaces/headmeta';

const HeadMeta = ({ title, description, image, url }: HeadProps) => {
  return (
    <Head>
      <meta name="description" content="성장 지향 프로젝트 동아리 시퀀스입니다." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Subject" content="학습 효율 증진과 웹 개발 커뮤니티 활성화" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta httpEquiv="Other Agent" content="naamukim" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || '시퀀스'} />
      <meta property="og:description" content={description || '프로젝트 동아리 시퀀스'} />
      <meta property="og:image" content={image || '/sqMakesD.png'} />
      <meta property="og:url" content={url || 'https://sequence.cbnu.ac.kr'} />
      <meta httpEquiv="Author" content={'naamukim,geunu97,songhaeunsong,songhee99'} />
      <meta name="Keywords" content="시퀀스, 프로젝트 동아리, 웹 개발" />
      <meta property="og:site_name" content={'시퀀스'} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || '시퀀스'} />
      <meta name="twitter:description" content={description || '프로젝트 동아리 시퀀스'} />
      {/*<meta name="twitter:image" content={image} />*/}
      <meta name="twitter:site" content="sequence" />
      <meta name="twitter:creator" content="sequence" />
      <meta name="google-site-verification" content="IsUbo0Ljch04OGt99wlyI39_F83dUWpy_D4pqgeNCrI" />
      <html lang="ko" />
    </Head>
  );
};

export default HeadMeta;
