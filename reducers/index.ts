import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';
import user, { IUserReducerState } from './user';
import post, { IPostState } from './post';

export interface IReducerState {
  user: IUserReducerState;
  post: IPostState;
}

//(이전 상태 , 액션)=> 다음 상태
const rootReducer = (state: IReducerState | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
        post,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
