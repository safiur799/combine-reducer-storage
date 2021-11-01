import { ADD_TODOS, DELETE_TODOS } from "./actionTypes";

export const addtodos = (payload) => {
  return {
    type: ADD_TODOS,
    payload,
  };
};

export const deletetodos = (payload) => {
  return {
    type: DELETE_TODOS,
    payload,
  };
};
