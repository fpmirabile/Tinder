import * as types from './actionTypes';


export function login(navProps, res) {
  console.log(res);
  return {
    type: types.LOGIN,
    nav:navProps,
    data: res
  };
}

export function setNavigator(nav) {
  return {
    type: types.SET_NAVIGATOR,
    payload: nav
  };
}