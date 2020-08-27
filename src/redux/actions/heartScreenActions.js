import * as types from './actionTypes';

export function setHeartPlume(heartScreen) {
  return { type: types.UPDATE_HEART_SCREEN, heartScreen };
}
