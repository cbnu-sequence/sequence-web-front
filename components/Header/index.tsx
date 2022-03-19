import styled from '@emotion/styled';
import Link from 'next/link';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { loadMyInfoAPI } from '../../apis/user';
import User from '../../interfaces/user';
import { queryKeys } from '../../react-query/constants';

const AuthDiv = styled.div`
  font-size: 20px;
`;

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const { data: me } = useQuery<User>(queryKeys.user, loadMyInfoAPI);
  return (
    <header>
      <span>
        <Link href="/">
          <a>로고이미지</a>
        </Link>
      </span>
      <span>
        <Link href="/notice">
          <a>게시판</a>
        </Link>
      </span>
      <AuthDiv>
        {me ? (
          <>
            <span>
              <Link href="/login">
                <a>로그인</a>
              </Link>
            </span>
            <span>
              <Link href="/signup">
                <a>회원가입</a>
              </Link>
            </span>
          </>
        ) : (
          <>
            <span>
              <Link href="/profile">
                <a>프로필</a>
              </Link>
            </span>
            <span>
              <a>로그아웃</a>
            </span>
          </>
        )}
      </AuthDiv>
    </header>
  );
}

export default Header;
