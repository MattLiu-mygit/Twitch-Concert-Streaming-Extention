import * as types from './actionTypes';

export function setHeartPlume(heartPlume) {
  return { type: types.UPDATE_HEART_PLUME, heartPlume };
}
