import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import { KAKAO_LOG_IN_REQUEST } from '../reducers/user';

function OAuth2RedirectHandler() {
  const dispatch = useDispatch();
  let code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  useEffect(() => {
    dispatch({
      type: KAKAO_LOG_IN_REQUEST,
      data: code,
    });
  });
  return <Spinner />;
}

export default OAuth2RedirectHandler;
