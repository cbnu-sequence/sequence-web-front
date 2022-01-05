import { createWrapper } from 'next-redux-wrapper';
import { createStore,applyMiddleware,compose } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from '../reducers/user';
import createSagaMiddleware from '@redux-saga/core';

const configureStore=()=>{
  const sagaMiddleware=createSagaMiddleware();
  const middleWares=[sagaMiddleware];
  const enhancer= process.env.NODE_ENV==="production"
    ? compose(applyMiddleware(...middleWares))
    : composeWithDevTools(applyMiddleware(...middleWares))
  const store=createStore(reducer,enhancer);
  return store;
};

const wrapper=createWrapper(configureStore,{
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
