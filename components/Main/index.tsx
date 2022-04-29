import React, { useState, useRef, useEffect } from 'react';
import { MainDiv, Pomodoro, PomoLink, Github } from './styles';
import Link from 'next/link';

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
      <Pomodoro>
        <div className="pomodoro--text">
          <img src="/title_pomodoro.png" />
          <p>
            Why Pomodoro?
            <br />
            뽀모도로 기법은 시간 관리 방법론으로, 타이머를 이용해서 25분간 <br />
            집중해서 일을 한 다음 5분간 휴식하는  방식입니다. 시퀀스에서는 <br />
            개발자로서 '집중과 효율의 극대화'를 위해 뽀모도로를 선택했습니다.
          </p>
        </div>
        <PomoLink href="/ppomodoro">
          <img src="/tomato.png" className="tomato_btn" />
        </PomoLink>
      </Pomodoro>
      <div className="main__page4"></div>
      <Github>
        <h2>Sequence</h2>
        <h3>github</h3>
        <Link href="https://github.com/cbnu-sequence">
          <img src="/github.png" />
        </Link>
      </Github>
    </MainDiv>
  );
}

export default Main;