import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function costReducer(state = initialState.heartPlume, action) {
  if (action.type === types.UPDATE_HEART_PLUME) {
    return action.heartPlume;
  } else {
    return state;
  }
}
