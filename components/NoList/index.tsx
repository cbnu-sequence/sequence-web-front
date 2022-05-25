import React from 'react';
import { NoListDiv } from "./styles";
import Headers from '../Header';

function NoList() {
  return (
    <>
    <Headers />
    <NoListDiv>
      <div className="mainBox">
        <img className="flowerLogo_dg" src="/flowerLogo_dg.png" />
        <p className="english">have no notice</p>
        <p className="hangul">등록된 공지사항이 없습니다</p>
      </div>
    </NoListDiv>
    </>
  );
}

export default NoList;