import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { tokenConfirmAPI } from '../../apis/user';
import useInput from '../../hooks/useInput';
import { Button, EmailHeader, Form, Input, Label } from '../../styles/signup';

const EmailCheckProfile = () => {
  const [token, onChangeToken] = useInput('');
  const Router = useRouter();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      tokenConfirmAPI({ token })
        .then(() => {
          alert('이메일 인증에 성공했습니다. 잠시 후 업데이트 됩니다.');
          Router.replace('/profile');
        })
        .catch((error) => {
          console.error(error);
        });
    },
    [Router, token],
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
};

export default EmailCheckProfile;
