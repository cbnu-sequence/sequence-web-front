import React from 'react';
import Link from 'next/link';
import { TitleBlock, SecondBlock, IconLinkBlock } from '../../components/404/styles';
import { AiOutlineHome, AiOutlineAppstore, AiOutlineHeatMap } from 'react-icons/ai';

const Index = () => {
  return (
    <>
      <TitleBlock>잘못된 경로입니다.</TitleBlock>
      <SecondBlock>
        <Link href="/">
          <IconLinkBlock>
            <div className="icon">
              <AiOutlineHome />
            </div>
            <div className="btn">홈으로 이동하기</div>
          </IconLinkBlock>
        </Link>
        <Link href="/board/projects">
          <IconLinkBlock>
            <div className="icon">
              <AiOutlineAppstore />
            </div>
            <div className="btn">프로젝트로 이동하기</div>
          </IconLinkBlock>
        </Link>
        <Link href="/board/notice">
          <IconLinkBlock>
            <div className="icon">
              <AiOutlineHeatMap />
            </div>
            <div className="btn">공지사항으로 이동하기</div>
          </IconLinkBlock>
        </Link>
      </SecondBlock>
    </>
  );
};

export default Index;
