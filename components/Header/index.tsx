import Link from 'next/link';
import React, { useCallback, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { HeaderColor, HeaderDiv } from './styles';
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
  }, [signout]);

  const onClose = useCallback(() => {
    setIsToggled(false);
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (loading) {
      window.addEventListener('scroll', () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
      });
    }
    return () => setLoading(false);
  }, [loading]);

  return (
    <HeaderDiv>
      <HeaderColor
        baseColor={scrollPosition < 50 ? 'black-header' : 'white-header'}
        isToggled={isToggled}
        userToggled={userToggled}
      >
        <div
          className="toggle"
          onClick={() => {
            setIsToggled(!isToggled);
          }}
        >
          <FontAwesomeIcon aria-hidden={false} icon={!isToggled ? faBars : faTimes} />
        </div>
        <Link href="/" passHref>
          <div className="logo">
            <div className="logo_b">
              <img className="logotype" src="/sequence_b.png" />
              <img className="flowerLogo" src="/flowerLogo_b.png" />
            </div>
            <div className="logo_w">
              <img className="logotype" src="/sequence_w.png" />
              <img className="flowerLogo" src="/flowerLogo_w.png" />
            </div>
          </div>
        </Link>
        <div
          className="user"
          onClick={() => {
            setUserToggled(!userToggled);
          }}
        >
          <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
        </div>
        <ul className="header__menulist">
          <Link href="/introduce" passHref>
            <li onClick={onClose}>
              <a>시퀀스 소개</a>
            </li>
          </Link>
          <li>
            부원 소개
            <ul className="members_ul">
              <li onClick={onClose}>
                <Link href="/members/projectteam">프로젝트 팀</Link>
              </li>
              <li onClick={onClose}>
                <Link href="/members/techcourseteam">테크코스 팀</Link>
              </li>
              <li onClick={onClose}>
                <Link href="/members/manager">운영진</Link>
              </li>
            </ul>
          </li>
          <li>
            게시판
            <ul className="board_ul">
              <li onClick={onClose}>
                <Link href="/board/notice">공지사항</Link>
              </li>
              <li onClick={onClose}>
                <Link href="/board/projects">프로젝트</Link>
              </li>
              <li onClick={onClose}>
                <Link href="/board/sharinginfo/">정보 공유</Link>
              </li>
            </ul>
          </li>
          <Link href="/pomodoro" passHref>
            <li onClick={onClose}>
              <a>뽀모도로</a>
            </li>
          </Link>
        </ul>
        <ul className="header__right">
          {me ? (
            <>
              <Link href="/profile" passHref>
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
              <Link href="/login" passHref>
                <li>
                  <a>로그인</a>
                </li>
              </Link>
              <Link href="/signup" passHref>
                <li>
                  <a>회원가입</a>
                </li>
              </Link>
            </>
          )}
        </ul>
      </HeaderColor>
    </HeaderDiv>
  );
}

export default Header;
