import React from 'react';
import { NoListDiv } from './styles';
import Headers from '../Header';

function NoList({ enTitle, krTitle }) {
  return (
    <>
      <Headers />
      <NoListDiv>
        <div className="mainBox">
          <img className="flowerLogo_dg" src="/flowerLogo_dg.png" />
          <p className="english">have no {enTitle}</p>
          <p className="hangul">{krTitle}</p>
        </div>
      </NoListDiv>
    </>
  );
}

export default NoList;
