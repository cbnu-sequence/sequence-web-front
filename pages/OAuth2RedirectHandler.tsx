import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import Spinner from '../components/Spinner';

function OAuth2RedirectHandler(){
  const dispatch=useDispatch();
  let code= new URL(window.location.href).searchParams.get("code");
return <Spinner/>
}

export default OAuth2RedirectHandler;
