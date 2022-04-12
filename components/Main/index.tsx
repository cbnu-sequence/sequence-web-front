import React, { useState, useRef, useEffect } from 'react';
import { MainDiv, Github } from './styles';

function Main() {
  return (
    <MainDiv>
      <div className="main__top">
        <img src="/sqLogo.png" />
        <div className="main__top--text">
          <img src="/sqMakesD.png" />
          <hr />
          <p>
            쇼트가 신을 이루고 신이 시퀀스를 이룬다.
            <br />
            안녕하세요. 성장지향형 프로젝트 동아리 '시퀀스' 입니다.
            <br />
            저희는 세상에 존재하는 문제들을 기술적으로 해결합니다.
          </p>
        </div>
      </div>
      <div className="main__page2"></div>
      <div className="main__page3"></div>
      <div className="main__page4"></div>
      <Github>
        <img src="/title_github.png" />
        <h2>Sequence</h2>
        <h3>github</h3>
        <img src="/github.png" />
      </Github>
    </MainDiv>
  );
}

export default Main;
