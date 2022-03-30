import Link from 'next/link';
import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { logOutAPI } from '../../apis/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { HeaderDiv } from './styles';
import { useUser } from '../../hooks/useUser';

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const { user: me, clearUser } = useUser();

  const onLogOut = useCallback(() => {
    try {
      logOutAPI().then(clearUser);
    } catch (err) {
      console.log(err);
    }
  }, [clearUser]);

  return (
    <HeaderDiv isToggled={isToggled} userToggled={userToggled}>
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
          <img src="/sequence_w.png" />
        </Link>
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
        <li>
          <Link href="/">
            <a>시퀀스 소개</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>부원 소개</a>
          </Link>
        </li>
        <li>게시판</li>
        <li>뽀모도로</li>
      </ul>
      <ul className="header__right">
        {me ? (
          <>
            <li>
              <Link href="/profile">
                <a>프로필</a>
              </Link>
            </li>
            <li onClick={onLogOut}>
              <a>로그아웃</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">
                <a>로그인</a>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <a>회원가입</a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </HeaderDiv>
  );
}

export default Header;
