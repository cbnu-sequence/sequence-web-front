import { useRouter } from 'next/router';
import React from 'react';
import { useCallback } from 'react';
import { tokenConfirmAPI } from '../../apis/user';
import useInput from '../../hooks/useInput';
import { EmailCheckProfileBlock } from './styles';

const EmailCheckProfile = ({ setEmailCheckBtnClick }) => {
  const [token, onChangeToken] = useInput('');
  const Router = useRouter();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      tokenConfirmAPI({ token })
        .then(() => {
          setEmailCheckBtnClick(false);
          alert('이메일 인증에 성공했습니다.');
          Router.replace('/');
        })
        .catch((error) => {
          setEmailCheckBtnClick(false);
          alert('이메일 인증에 실패했습니다.');
          Router.replace('/');
          console.error(error);
        });
    },
    [Router, setEmailCheckBtnClick, token],
  );

  return (
    <>
      <EmailCheckProfileBlock onSubmit={onSubmit}>
        <input
          type="text"
          value={token}
          name="token"
          placeholder="이메일로 전송된 인증번호 6글자를 입력하세요"
          onChange={onChangeToken}
        />
        <button type="submit">확인</button>
      </EmailCheckProfileBlock>
    </>
  );
};

export default EmailCheckProfile;
