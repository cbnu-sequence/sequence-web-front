import React, { useEffect } from 'react';
import Spinner from './Spinner';
import { kakaoLogInAPI } from '../apis/user';
import Router from 'next/router';
import { useUser } from '../hooks/useUser';

function OAuth2RedirectHandler() {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const kakaoLogIn = async () => {
      try {
        await kakaoLogInAPI(code);
      } catch (err) {
        alert(err);
      }
    };
    kakaoLogIn().then((res) => {
      alert(res);
      Router.replace('/');
    });
  });

  return <Spinner />;
}

export default OAuth2RedirectHandler;
