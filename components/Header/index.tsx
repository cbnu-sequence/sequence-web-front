import Link from 'next/link';
import React, { useCallback, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { HeaderWithColor, HeaderDiv } from './styles';
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
      <HeaderWithColor
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
              <a>????????? ??????</a>
            </li>
          </Link>
          <li>
            ?????? ??????
            <ul className="members_ul">
              <li onClick={onClose}>
                <Link href="/members/projectteam">???????????? ???</Link>
              </li>
              <li onClick={onClose}>
                <Link href="/members/techcourseteam">???????????? ???</Link>
              </li>
              <li onClick={onClose}>
                <Link href="/members/manager">?????????</Link>
              </li>
            </ul>
          </li>
          <li>
            ?????????
            <ul className="board_ul">
              <li onClick={onClose}>
                <Link href="/board/notice">????????????</Link>
              </li>
              <li onClick={onClose}>
                <Link href="/board/projects">????????????</Link>
              </li>
              <li onClick={onClose}>
                <Link href="/board/sharinginfo/">?????? ??????</Link>
              </li>
            </ul>
          </li>
          <Link href="/pomodoro" passHref>
            <li onClick={onClose}>
              <a>????????????</a>
            </li>
          </Link>
        </ul>
        <ul className="header__right">
          {me ? (
            <>
              <Link href="/profile" passHref>
                <li>
                  <a>?????????</a>
                </li>
              </Link>
              <li onClick={onLogOut}>
                <a>????????????</a>
              </li>
            </>
          ) : (
            <>
              <Link href="/login" passHref>
                <li>
                  <a>?????????</a>
                </li>
              </Link>
              <Link href="/signup" passHref>
                <li>
                  <a>????????????</a>
                </li>
              </Link>
            </>
          )}
        </ul>
      </HeaderWithColor>
    </HeaderDiv>
  );
}

export default Header;
