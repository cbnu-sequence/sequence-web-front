import React, { useCallback, useEffect } from 'react';
import { loadMyInfoAPI, tokenConfirmAPI } from '../../apis/user';
import useInput from '../../hooks/useInput';
import { Button, Form, EmailHeader, Input, Label } from '../../styles/signup';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useUser } from '../../hooks/useUser';
import { useCustomToast } from '../../hooks/useCustomToast';

function Emailcheck() {
  const [token, onChangeToken] = useInput('');
  const Router = useRouter();
  const toast = useCustomToast();
  const { user } = useUser();
  if (user) {
    alert('이미 로그인 된 회원입니다.');
    Router.replace('/');
  }

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      tokenConfirmAPI({ token })
        .then(() => {
          alert('이메일 인증에 성공했습니다.');
          toast({ title: '로그인 후 이용해 주세요!', status: 'info' });
          Router.replace('./login');
        })
        .catch((error) => {
          console.error(error);
        });
    },
    [token],
  );

  return (
    <>
      <Head>
        <title>시퀀스 | 이메일 인증</title>
      </Head>
      <div id="contatiner">
        <EmailHeader>이메일 인증</EmailHeader>
        <Form onSubmit={onSubmit}>
          <Label id="token-label">
            <span>이메일 인증번호</span>
            <div>
              <Input
                type="text"
                value={token}
                name="token"
                placeholder="입력하신 이메일로 전송된 인증번호 6글자를 입력해주세요"
                onChange={onChangeToken}
              />
            </div>
          </Label>
          <Button type="submit">인증번호 확인</Button>
        </Form>
      </div>
    </>
  );
}

export default Emailcheck;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'onlyBody',
    },
  };
};
