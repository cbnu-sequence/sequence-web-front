import produce from 'immer';
import { AnyAction } from 'redux';

export const initialState={
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: false,
  me:null,
}

export type IUserReducerState=typeof initialState;

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";


const reducer=(state=initialState, action:AnyAction)=>
  produce(state,(draft)=>{
    switch(action.type){
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      default:
        break;
    }
  })

export default reducer;
