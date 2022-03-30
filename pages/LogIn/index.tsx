import React, { useCallback, useEffect, useState } from 'react';
import useInput from '../../hooks/useInput';
import { Button, Form, Header, Input, Label, LinkContainer } from '../signup/styles';
import KakaoBtn from '../../components/KakaoBtn';
import Link from 'next/link';
import Head from 'next/head';
import { useUser } from '../../hooks/useUser';
import Router from 'next/router';
import { useAuth } from '../../hooks/useAuth';
import { KAKAO_AUTH_URL } from '../../config/config';

function LogIn() {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { login } = useAuth();
  const { user } = useUser();

  if (user) {
    Router.replace('/');
  }

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      login({ email, password });
    },
    [email, password],
  );

  return (
    <>
      <Head>
        <title>시퀀스 | 로그인</title>
      </Head>
      <div id="container">
        <Header>
          <Link href="/">
            <img src="/sequence_b.png" />
          </Link>
        </Header>
        <Form onSubmit={onSubmit}>
          <Label id="email-label">
            <span>이메일 주소</span>
            <div>
              <Input type="email" required id="email" name="email" value={email} onChange={onChangeEmail} />
            </div>
          </Label>
          <Label id="password-label">
            <span>비밀번호</span>
            <div>
              <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
            </div>
          </Label>
          <Button type="submit">로그인</Button>
          <KakaoBtn />
          <LinkContainer>
            회원이 아니신가요?&nbsp;
            <Link href="/signup">
              <a>회원가입 하러가기</a>
            </Link>
          </LinkContainer>
        </Form>
      </div>
    </>
  );
}

export default LogIn;
