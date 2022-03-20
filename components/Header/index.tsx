import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';
import { loadMyInfoAPI } from '../../apis/user';
import User from '../../interfaces/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { queryKeys } from '../../react-query/constants';
import { HeaderDiv } from './styles';

function Header(): ReactElement {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const { data: me } = useQuery<User>(queryKeys.user, loadMyInfoAPI);

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
          <a>로고이미지</a>
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
            <li>
              <a>로그아웃</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/LogIn">
                <a>로그인</a>
              </Link>
            </li>
            <li>
              <Link href="/SignUp">
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
