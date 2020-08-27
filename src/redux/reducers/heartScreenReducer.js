import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function costReducer(state = initialState.heartScreen, action) {
  if (action.type === types.UPDATE_HEART_SCREEN) {
    return action.heartScreen;
  } else {
    return state;
  }
}
