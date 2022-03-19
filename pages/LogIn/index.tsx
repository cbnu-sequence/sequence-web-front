import React, { useCallback, useEffect, useState } from 'react';
import { logInAPI } from '../../apis/user';
import useInput from '../../hooks/useInput';
import { Button, Form, Header, Input, Label, LinkContainer } from '../SignUp/styles';
import KakaoBtn from '../../components/KakaoBtn';
import { useMutation, useQueryClient } from 'react-query';
import { queryKeys } from '../../react-query/constants';
import { AxiosError } from 'axios';
import User from '../../interfaces/user';
function LogIn() {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const mutation = useMutation<User, AxiosError, { email: string; password: string }>(queryKeys.user, logInAPI, {
    onMutate: () => {
      setIsLoading(true);
    },
    onError: (error) => {
      alert(error.response?.data);
    },
    onSuccess: (user) => {
      queryClient.setQueryData(queryKeys.user, user);
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });
  const onSubmit = useCallback(() => {
    logInAPI({ email, password });
    mutation.mutate({ email, password });
  }, [email, mutation, password]);

  return (
    <div id="container">
      <Header>Sequence</Header>
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
          <a href="/signup">회원가입 하러가기</a>
        </LinkContainer>
      </Form>
    </div>
  );
}

export default LogIn;
