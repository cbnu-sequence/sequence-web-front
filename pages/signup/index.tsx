import React, { useCallback, useState } from 'react';
import { Button, Error, Form, Header, Input, Label, LinkContainer, Success } from '../../styles/signup';
import useInput from '../../hooks/useInput';
import KakaoBtn from '../../components/KakaoBtn';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useUser } from '../../hooks/useUser';
import { useAuth } from '../../hooks/useAuth';

const SignUp = () => {
  const [signUpError, setSignUpError] = useState(false);
  const [mismatchError, setMismatchError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [name, onChangeName] = useInput('');
  const [password, , setPassword] = useInput('');
  const [phoneNumber, onChangePhoneNumber] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const { signup } = useAuth();
  const { user } = useUser();
  const Router = useRouter();
  if (user) {
    Router.replace('/');
  }

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(passwordCheck !== e.target.value);
    },
    [passwordCheck, setPassword],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(password !== e.target.value);
    },
    [password, setPasswordCheck],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      signup({ email, password, name, phoneNumber }, Router).catch((error) => {
        setSignUpError(true);
      });
    },
    [email, name, password, phoneNumber],
  );

  return (
    <>
      <Head>
        <title>회원가입 | Together</title>
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
              <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
            </div>
          </Label>
          <Label id="name-label">
            <span>이름</span>
            <div>
              <Input type="text" id="name" name="name" value={name} onChange={onChangeName} />
            </div>
          </Label>
          <Label id="phonenumber-label">
            <span>전화번호</span>
            <div>
              <Input
                type="text"
                id="phonenumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onChangePhoneNumber}
              />
            </div>
          </Label>
          <Label id="password-label">
            <span>비밀번호</span>
            <div>
              <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
            </div>
          </Label>
          <Label id="password-check-label">
            <span>비밀번호 확인</span>
            <div>
              <Input
                type="password"
                id="password-check"
                name="password-check"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              />
            </div>
            {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
            {signUpError && <Error>이미 가입된 이메일입니다.</Error>}
          </Label>
          <div id="sign-up-btns">
            <Button type="submit">회원가입</Button>
            <KakaoBtn />
          </div>
        </Form>
        <LinkContainer>
          이미 회원이신가요?&nbsp;
          <Link href="/login">로그인 하러가기</Link>
        </LinkContainer>
      </div>
    </>
  );
};

export default SignUp;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'onlyBody',
    },
  };
};
