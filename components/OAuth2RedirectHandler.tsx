import React, { useEffect } from 'react';
import Spinner from './Spinner';
import { kakaoLogInAPI } from '../apis/user';
import { useUser } from '../hooks/useUser';
import Router from 'next/router';

function OAuth2RedirectHandler() {
  const { user } = useUser();
  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get('code');
    kakaoLogInAPI(code);
    if (user) {
      Router.replace('/');
    }
  });

  return <Spinner />;
}

export default OAuth2RedirectHandler;
