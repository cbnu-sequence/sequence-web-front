import React, { useCallback } from 'react';
import { tokenConfirmAPI } from '../../apis/user';
import useInput from '../../hooks/useInput';
import { Button, Form, Header, Input, Label } from '../SignUp/styles';
import Router from 'next/router';

function Emailcheck() {
  const [token, onChangeToken] = useInput('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      tokenConfirmAPI({ token })
        .then(() => {
          alert('이메일 인증에 성공했습니다');
          Router.replace('/');
        })
        .catch((error) => {
          alert(error);
        });
    },
    [token],
  );
  return (
    <div id="contatiner">
      <Header>이메일 인증</Header>
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
  );
}

export default Emailcheck;
