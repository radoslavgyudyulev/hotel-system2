import { SET_ACCOUNT_DATA } from "../_actions/types";

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ACCOUNT_DATA:
      return { ...state, ...payload };
    default:
      return state;
  }
};
