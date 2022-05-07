import Link from 'next/link';
import React, { useCallback, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { HeaderDiv } from './styles';
import { useUser } from '../../hooks/useUser';
import { useAuth } from '../../hooks/useAuth';

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const { user: me } = useUser();
  const { signout } = useAuth();
  const onLogOut = useCallback(() => {
    try {
      signout();
    } catch (err) {
      console.log(err);
    }
  }, []);
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <HeaderDiv isToggled={isToggled} userToggled={userToggled}>
      <div className={scrollPosition < 50 ? 'black-header' : 'white-header'}>
        <div
          className="toggle"
          onClick={() => {
            setIsToggled(!isToggled);
          }}
        >
          <FontAwesomeIcon aria-hidden={false} icon={!isToggled ? faBars : faTimes} />
        </div>
        <div className="logo">
          <Link href="/">
            <img className="logo_b" src="/sequence_b.png" />
          </Link>
          <Link href="/">
            <img className="logo_w" src="/sequence_w.png" />
          </Link>
          <img className="logo_bf" src="/sequence_bf.png" />
          <img className="logo_wf" src="/sequence_wf.png" />
        </div>
        <div
          className="user"
          onClick={() => {
            setUserToggled(!userToggled);
          }}
        >
          <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
        </div>
        <ul className="header__menulist">
          <Link href="/">
            <li>
              <a>시퀀스 소개</a>
            </li>
          </Link>
          <Link href="/">
            <li>
              <a>부원 소개</a>
            </li>
          </Link>
          <li>
            게시판
            <ul>
              <li>
                <Link href="/board/notice">공지사항</Link>
              </li>
              <li>
                <Link href="/board/projects">프로젝트</Link>
              </li>
              <li>
                <Link href="/boardsharinginfo/">정보 공유</Link>
              </li>
            </ul>
          </li>
          <Link href="/ppomodoro">
            <li>
              <a>뽀모도로</a>
            </li>
          </Link>
        </ul>
        <ul className="header__right">
          {me ? (
            <>
              <Link href="/profile">
                <li>
                  <a>프로필</a>
                </li>
              </Link>
              <li onClick={onLogOut}>
                <a>로그아웃</a>
              </li>
            </>
          ) : (
            <>
              <Link href="/login">
                <li>
                  <a>로그인</a>
                </li>
              </Link>
              <Link href="/signup">
                <li>
                  <a>회원가입</a>
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </HeaderDiv>
  );
}

export default Header;
