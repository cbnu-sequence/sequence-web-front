import React, { useEffect } from 'react';
import Spinner from './Spinner';
import { kakaoLogInAPI } from '../apis/user';
import Router, { useRouter } from 'next/router';
import { useUser } from '../hooks/useUser';
import { type } from '@testing-library/user-event/dist/type';

function OAuth2RedirectHandler() {
  const router = useRouter();
  const code = router.query.code;
  if (typeof code != 'undefined') {
    (async () => {
      await kakaoLogInAPI(code).then((res) => {
        Router.replace('/');
      });
    })();
  }

  return <Spinner />;
}

export default OAuth2RedirectHandler;
