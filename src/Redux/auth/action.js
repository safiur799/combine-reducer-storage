import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionType";
export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
export const loignFailure = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};
